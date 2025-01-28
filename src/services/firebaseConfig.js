// src/firebaseConfig.js
import { initializeApp } from "firebase/app";



// Configuración de tu proyecto Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD5z7jiJe9YYFnaBryvJCdo4PHMhxFbKs8",
    authDomain: "smartrank-783f8.firebaseapp.com",
    projectId: "smartrank-783f8",
    storageBucket: "smartrank-783f8.firebasestorage.app",
    messagingSenderId: "158882490708",
    appId: "1:158882490708:web:a11dbdfe465b04062a40c1",
    measurementId: "G-LVXTMQZKXL"
  };

// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
