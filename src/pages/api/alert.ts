import { uploadAlert } from "@/server/firestore.service";
import { NextApiRequest, NextApiResponse } from "next"
import ImageKit from 'imagekit';
import { useAlertStore } from "@/stores/useAlertStore";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
});

let events: {
    message: string,
    totalAlerts: number
}[] = []

let alertCount = 0

const handleCaptureAndUpload = async () => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_CAPTURE_URL!);
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


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query;

  console.log(path);
  

  if (req.method === 'POST') {
    alertCount++;
    events.push({ message: 'Data fetched', totalAlerts: alertCount });

    return res.status(200).json({ message: 'Received', totalAlerts: alertCount });
  }

  if (req.method === 'GET') {
    if (path === '/') {
      alertCount = 0;
      events.push({ message: 'Data reset', totalAlerts: 0 });
      return res.status(200).json({ message: 'Alert count reset', totalAlerts: alertCount });
    } else {
      return res.status(200).json(events); // or return alertCount, depending on your UI
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}