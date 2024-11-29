// src/firebase-config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCRmneBSGfkQfoaFg3-zGtkpekTMHhkfYs",
  authDomain: "smart-irrigation-system-cd64d.firebaseapp.com",
  databaseURL: "https://smart-irrigation-system-cd64d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-irrigation-system-cd64d",
  storageBucket: "smart-irrigation-system-cd64d.firebasestorage.app",
  messagingSenderId: "742167551462",
  appId: "1:742167551462:web:e7a67bf9a6066da1658a27",
};

const app = initializeApp(firebaseConfig);

export default app;
