'use client'

const MonitorPage = () => {
    return <iframe src={process.env.NEXT_PUBLIC_CAM_URL} className="flex-1 h-screen"></iframe>
}

export default MonitorPage