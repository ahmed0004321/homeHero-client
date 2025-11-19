// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuCj3tYd1W5Lz46-vrFYsT98zUhkUDpAI",
  authDomain: "home-hero-client-39a3d.firebaseapp.com",
  projectId: "home-hero-client-39a3d",
  storageBucket: "home-hero-client-39a3d.firebasestorage.app",
  messagingSenderId: "1020084830042",
  appId: "1:1020084830042:web:c2dfa810b293d1633ebd63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);