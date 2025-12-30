import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrM2IUTRXPVUcbC95jSoRmUNueP79fWLU",
  authDomain: "mi-ecommerce-51e43.firebaseapp.com",
  projectId: "mi-ecommerce-51e43",
  storageBucket: "mi-ecommerce-51e43.firebasestorage.app",
  messagingSenderId: "923755580600",
  appId: "1:923755580600:web:7410c46d0c2636d1e3384d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);