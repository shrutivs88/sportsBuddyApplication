// src/firebase/firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; // Keep if you use analytics
import { getAuth } from "firebase/auth"; // <--- IMPORT THIS
import { getFirestore } from "firebase/firestore"; // <--- IMPORT THIS

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOijQ2Ekx3Pg08hy1tzi8-l2_xt5ThVnU",
    authDomain: "sportsbuddy-151bc.firebaseapp.com",
    projectId: "sportsbuddy-151bc",
    storageBucket: "sportsbuddy-151bc.firebasestorage.app",
    messagingSenderId: "995675617385",
    appId: "1:995675617385:web:00fffc9cd0ccdb67bdcaf8",
    measurementId: "G-XHFT4K097C"
  };

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services and export them
const auth = getAuth(app); // <--- INITIALIZE AUTH
const db = getFirestore(app); // <--- INITIALIZE FIRESTORE

// Optional: Initialize Analytics if you plan to use it
const analytics = getAnalytics(app);

// Export all necessary services
export { app, auth, db, analytics }; // <--- EXPORT AUTH AND DB
