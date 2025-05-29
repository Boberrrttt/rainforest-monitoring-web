'use client'

import { useAlertStore } from "@/stores/useAlertStore"
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const MonitorPage = () => {
    const path = usePathname()
    const setAlerts = useAlertStore((state) => state.setAlerts);
    let alerts = useAlertStore(state => state.newAlerts)
    
    const handleButton = async () => {
        const response = await fetch(`/api/alert?path=${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: 'New alert triggered',
                timestamp: new Date().toISOString(),
            }),
        });

        const data = await response.json()
        setAlerts(data.totalAlerts ?? alerts);

        localStorage.setItem('totalAlerts', data.totalAlerts || '0')
    }
  
    // Load from localStorage on client
    useEffect(() => {
      const total = parseInt(localStorage.getItem('totalAlerts') || '0', 10);
      setAlerts(total);
    }, [setAlerts]);

    return (
        <div>
            <button onClick={handleButton}>Alert</button>
            {/* <iframe src={process.env.NEXT_PUBLIC_CAM_URL}></iframe> */}
        </div>
    )
}

export default MonitorPage