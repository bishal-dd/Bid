// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firesbase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCtFi-EaZ8ToilbxyC6GYkHwKhSaZr64o",
  authDomain: "test-7f801.firebaseapp.com",
  projectId: "test-7f801",
  storageBucket: "test-7f801.appspot.com",
  messagingSenderId: "850812262501",
  appId: "1:850812262501:web:dc92728b82a9e638e40e8c",
  measurementId: "G-ZRGSL4QFR7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
