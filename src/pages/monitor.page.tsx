'use client'

const MonitorPage = () => {

    return (
        <div>
            
            <iframe src={process.env.NEXT_PUBLIC_CAM_URL}></iframe>
        </div>
    )
}

export default MonitorPage