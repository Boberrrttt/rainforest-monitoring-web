'use client'

import { useAlertStore } from "@/stores/useAlertStore"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MonitorPage = () => {
    // const path = usePathname()
    // const setAlerts = useAlertStore((state) => state.setAlerts);
    // let alerts = useAlertStore(state => state.newAlerts)
    
    // const handleButton = async () => {
    //     const response = await fetch(`/api/alert?path=${path}`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             message: 'New alert triggered',
    //             timestamp: new Date().toISOString(),
    //         }),
    //     });

    //     const data = await response.json()
    //     setAlerts(data.totalAlerts ?? alerts);

    //     localStorage.setItem('totalAlerts', data.totalAlerts || '0')
    // }
  
    // // Load from localStorage on client
    // useEffect(() => {
    //   const total = parseInt(localStorage.getItem('totalAlerts') || '0', 10);
    //   setAlerts(total);
    // }, [setAlerts]);

    const [isLoaded, setIsLoaded] = useState(false);


    return (
        <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
            <div className="w-full max-w-[65%] bg-white rounded-2xl shadow-2xl p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Live Camera Feed
            </h2>
            <img
                src={process.env.NEXT_PUBLIC_CAM_URL}
                onLoad={() => setIsLoaded(true)}
                className='rounded-xl w-full shadow-md transition-opacity duration-500 opacity-100'
                alt="Live feed"
            />
            </div>
      </div>
    )
}

export default MonitorPage