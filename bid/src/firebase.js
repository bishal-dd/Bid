import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyC8nSHKT5zZ4wOdp-xaF-Re4VTJ3csGLF0",
  authDomain: "bidding-web-app-9b454.firebaseapp.com",
  projectId: "bidding-web-app-9b454",
  storageBucket: "bidding-web-app-9b454.appspot.com",
  messagingSenderId: "60084398843",
  appId: "1:60084398843:web:f8960ad7750f65713a9e5e",
  measurementId: "G-902N23MH2Y",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
