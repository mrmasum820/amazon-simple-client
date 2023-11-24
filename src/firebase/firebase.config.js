// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAECEahOf-711KpwLoDm0zX6-0jg9lNvFA",
    authDomain: "ema-john-firebase-auth-f7ce4.firebaseapp.com",
    projectId: "ema-john-firebase-auth-f7ce4",
    storageBucket: "ema-john-firebase-auth-f7ce4.appspot.com",
    messagingSenderId: "125655181646",
    appId: "1:125655181646:web:f10f58573ec586c870d61f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;