import { uploadAlert } from "@/server/firestore.service";
import { NextApiRequest, NextApiResponse } from "next"
import ImageKit from 'imagekit';

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
});

let events: {
    message: string
}[] = []

const handleCaptureAndUpload = async () => {
  try {
    const response = await fetch("http://192.168.0.46/capture");
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResponse = await imagekit.upload({
      file: buffer,
      fileName: "capture.jpg",
    });

    console.log("Uploaded to ImageKit:", uploadResponse);
    
    return uploadResponse.thumbnailUrl

  } catch (error) {
    console.error("Upload failed:", error);
  }
};


export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        const { activity, soundLevel, timestamp} = req.body;

        events.push({ 'message': 'Data fetched' })

        const imageUrl = await handleCaptureAndUpload() 

        await uploadAlert(activity, imageUrl!, soundLevel, timestamp )

        return res.status(200).json({ message: 'Received' })
    }   

    if (req.method === 'GET') {
        return res.status(200).json(events)
    }

    return res.status(405).json({ message: 'Method not allowed' })
}