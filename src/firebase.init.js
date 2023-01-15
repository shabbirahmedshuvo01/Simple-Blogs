// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNzxFH9UwihIdVMqaMkwBz6l6AUGFkpes",
    authDomain: "simple-blogs-dd266.firebaseapp.com",
    projectId: "simple-blogs-dd266",
    storageBucket: "simple-blogs-dd266.appspot.com",
    messagingSenderId: "192633404774",
    appId: "1:192633404774:web:a8c51980bc3c6a1f6e1ca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);