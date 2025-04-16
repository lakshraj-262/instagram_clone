import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-ZQj4WYQCp0yZr0eQMeIvSyeTEIvXXjA",
  authDomain: "clone-b36f1.firebaseapp.com",
  projectId: "clone-b36f1",
  storageBucket: "clone-b36f1.appspot.com",
  messagingSenderId: "552737678871",
  appId: "1:552737678871:web:c885efd4c7bddb7b8ade52",
  measurementId: "G-NGGZR5N6TQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Authentication
export const db = getFirestore(app); // Firestore database

export default app;
