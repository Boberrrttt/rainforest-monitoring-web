'use client'

import { useAlertStore } from "@/stores/useAlertStore"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MonitorPage = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [isAlarm, setIsAlarm] = useState(false)

    const handleTriggerAlarm = async () => {
        setIsAlarm(!isAlarm)
          
        await fetch(`${process.env.NEXT_PUBLIC_ESP_URL!}${!isAlarm ? 'alert-on' : 'alert-off' }`)
        // await fetch('http://192.168.0.38:3000/api/alert', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         activity: 'alert',
        //         soundLevel: 1239
        //     })
        // })
    }

    return (
        <div className="w-screen h-screen flex gap-10 items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
            <div className="w-full flex flex-col items-center gap-6  max-w-[55%] bg-white rounded-2xl shadow-2xl p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Live Camera Feed
            </h2>

            <img
                src={'http://192.168.0.46:81/stream'}
                onLoad={() => setIsLoaded(true)}
                className='rounded-xl w-full shadow-md transition-opacity duration-500 opacity-100'
                alt="Live feed"
            />
              <button
                    onClick={handleTriggerAlarm}
                    className="bg-[#2C6E49] text-white px-6 py-2 font-bold rounded-full cursor-pointer hover:bg-[#3D8E64]"
                    >
                    Alarm: {!isAlarm ? 'OFF' : 'ON'}
                </button>

            </div>
      </div>
    )
}

export default MonitorPage