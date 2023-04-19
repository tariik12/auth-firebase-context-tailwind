// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPqdgNSYwGETxAJbziH90i52K_cVL36j8",
  authDomain: "auth-firebase-context-firebase.firebaseapp.com",
  projectId: "auth-firebase-context-firebase",
  storageBucket: "auth-firebase-context-firebase.appspot.com",
  messagingSenderId: "463759540143",
  appId: "1:463759540143:web:ff5e0bde5b861a7b55795a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;