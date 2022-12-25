import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

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
const storage = getStorage(app);
const auth = getAuth(app);

async function getProducts(db) {
  const productCol = collection(db, "Products");
  const productSnapshot = await getDocs(productCol);
  const productList = productSnapshot.docs.map((doc) => doc.data());
  return productList;
}

export { getProducts, storage, auth };

export default db;
