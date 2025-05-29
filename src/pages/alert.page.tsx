'use client'
import { db } from "@/server/firebase";
import { useAlertStore } from "@/stores/useAlertStore";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

interface alertTypes {
    name: string,
    date: Date
}

const AlertPage = () => {
  const path = usePathname()
    const [alerts, setAlerts] = useState([{
      name: '',
      date: new Date()
    }]);

    const resetAlerts = useAlertStore(state => state.setAlerts)

    useEffect(() => {
      const fetchAlerts = async () => {
        try {
          
          localStorage.setItem('totalAlerts', '0');

          resetAlerts(0)
          await fetch(`/api/alert?path=${path}`, {
            method: 'GET',
          });
          const querySnapshot = await getDocs(collection(db, 'alerts'));
    
          const newAlerts: alertTypes[] = [];
    
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            newAlerts.push({
              name: data.activity || 'Unknown',
              date: new Date(data.timestamp || Date.now()),
            });
          });
          setAlerts(newAlerts); 
        } catch (error) {
          console.error('Error fetching alerts:', error);
        }
      };
      
      fetchAlerts();
    }, []);
    
    
    return (
        <div className="p-8 flex-1 h-screen">
        <h2 className="text-2xl font-semibold mb-1">Alert History</h2>
        <div className="space-y-3 overflow-y-scroll h-[95%] py-4">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 border-l-4 border-[#2C6E49]"
            >
              <div className="text-lg font-medium text-gray-800">{alert.name}</div>
              <div className="text-sm text-gray-500">
                {alert.date.toString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default AlertPage