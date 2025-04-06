// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_ZTlCyGxM2h93lxjSJn2uPQgaG8BcVG0",
  authDomain: "react-apps-2434c.firebaseapp.com",
  projectId: "react-apps-2434c",
  storageBucket: "react-apps-2434c.firebasestorage.app",
  messagingSenderId: "1029669598213",
  appId: "1:1029669598213:web:9484dbffe97fd0fbd1186c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);