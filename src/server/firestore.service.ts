// utils/uploadAlert.ts
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const uploadAlert = async (type: string, timestamp: number) => {
  try {
    const docRef = await addDoc(collection(db, "alerts"), {
      type,
      timestamp,
    });

    console.log("Alert added with ID:", docRef.id);
    return { id: docRef.id };
  } catch (error) {
    console.error("Error adding alert:", error);
    throw error;
  }
};
