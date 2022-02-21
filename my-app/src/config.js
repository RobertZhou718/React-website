// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyARs6Jzuz1cd4cnKMXy48z-ssq7iM3QZ3o",
  authDomain: "ninth-glider-325616.firebaseapp.com",
  databaseURL: "https://ninth-glider-325616-default-rtdb.firebaseio.com",
  projectId: "ninth-glider-325616",
  storageBucket: "ninth-glider-325616.appspot.com",
  messagingSenderId: "823385830598",
  appId: "1:823385830598:web:27985028c06df0faf593c7",
  measurementId: "G-1TJV605HJS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getDatabase(app);
