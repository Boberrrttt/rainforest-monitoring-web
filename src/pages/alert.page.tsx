'use client'

import { useEffect, useState } from "react"

interface alertTypes {
    alert: string,
    timestamp: Date
}

const AlertPage = () => {
    const [alerts, setAlerts] = useState([
        { name: "Gunshot Detected", timestamp: new Date("2025-05-28T10:00:00Z") },
        { name: "Chainsaw Detected", timestamp: new Date("2025-05-28T10:05:00Z") },
        { name: "No illegal activity", timestamp: new Date("2025-05-28T10:10:00Z") },
        { name: "No illegal activity", timestamp: new Date("2025-05-28T10:10:00Z") },
        { name: "No illegal activity", timestamp: new Date("2025-05-28T10:10:00Z") },
        { name: "No illegal activity", timestamp: new Date("2025-05-28T10:10:00Z") },
        { name: "No illegal activity", timestamp: new Date("2025-05-28T10:10:00Z") },
        { name: "No illegal activity", timestamp: new Date("2025-05-28T10:10:00Z") },
        { name: "No illegal activity", timestamp: new Date("2025-05-28T10:10:00Z") },
        { name: "No illegal activity", timestamp: new Date("2025-05-28T10:10:00Z") },
        { name: "No illegal activity", timestamp: new Date("2025-05-28T10:10:00Z") },
        { name: "No illegal activity", timestamp: new Date("2025-05-28T10:10:00Z") },
    ]);

    // useEffect(() => {
    //     const fetchTest = async () => {
    //         fetch('/api/alert', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ message: 'test from browser' })
    //           }).then(res => res.json()).then(console.log)
    //     }
    //     fetchTest()
    // }, [])
    
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
                {alert.timestamp.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default AlertPage