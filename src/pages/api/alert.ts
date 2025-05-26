import { NextApiRequest, NextApiResponse } from "next"

let events: {
    type: string,
    timestamp: number
}[] = []

export const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST') {
        const { type, timestamp } = req.body;
        
        events.push({ type, timestamp })

        return res.status(200).json({ message: 'Received' })
    }

    if (req.method === 'GET') {
        return res.status(200).json(events)
    }

    return res.status(405).json({ message: 'Method not allowed' })
}