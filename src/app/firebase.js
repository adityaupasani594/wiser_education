// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZH-ZR2H-c2DaL6L9FxtLgtpuvelAnMAE",
    authDomain: "quantum-communication-99f4e.firebaseapp.com",
    projectId: "quantum-communication-99f4e",
    storageBucket: "quantum-communication-99f4e.firebasestorage.app",
    messagingSenderId: "286070157517",
    appId: "1:286070157517:web:84988d3b79806dd41e3984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);