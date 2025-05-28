// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApBhYujtKsidQb-AHDXdqTFbcj2CbhYH4",
  authDomain: "rainforest-monitoring.firebaseapp.com",
  projectId: "rainforest-monitoring",
  storageBucket: "rainforest-monitoring.firebasestorage.app",
  messagingSenderId: "99309725742",
  appId: "1:99309725742:web:30586b7d0dddc0740b97bf",
  measurementId: "G-CH871Y46Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

if (typeof window !== 'undefined') {
    import('firebase/analytics').then(({ getAnalytics }) => {
      getAnalytics(app);
    });
  }
  
export { db }