'use client'
import { db } from "@/server/firebase";
import { useAlertStore } from "@/stores/useAlertStore";
import { collection, getDocs } from "firebase/firestore";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

interface alertTypes {
  name: string,
  date: Date,
  image: string
}

const AlertPage = () => {
  const path = usePathname()
  const [alerts, setAlerts] = useState<alertTypes[]>([]);
  const resetAlerts = useAlertStore(state => state.setAlerts)

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        localStorage.setItem('totalAlerts', '0');
        resetAlerts(0);

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
            image: data.image || ''
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
    <div className="p-8 h-screen w-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📷 Alert History</h2>

      <div className="overflow-y-auto space-y-6 pr-2 scrollbar-thin scrollbar-thumb-gray-400 h-full">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-8 border-green-600 p-5 flex flex-col gap-2"
          >
            <div className="text-xl font-semibold text-gray-700">{alert.name}</div>
            <div className="text-sm text-gray-500">
              {alert.date.toLocaleString(undefined, {
                dateStyle: 'medium',
                timeStyle: 'short',
              })}
            </div>

            {alert.image ? (
              <img
                src={alert.image}
                alt={`Alert image`}
                className="mt-2 w-full max-w-lg rounded-lg object-cover"
              />
            ) : (
              <div className="text-sm text-gray-400 italic">No image available</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AlertPage;
