// utils/uploadAlert.ts
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";


export const uploadAlert = async (activity: string, image: string, soundLevel: number, timestamp: string) => {
  try {
    const docRef = await addDoc(collection(db, "alerts"), {
      activity,
      image,
      soundLevel,
      date: timestamp
    });

    console.log("Alert added with ID:", docRef.id);
    return { id: docRef.id };
  } catch (error) {
    console.error("Error adding alert:", error);
    throw error;
  }
};
