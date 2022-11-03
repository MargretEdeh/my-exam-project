// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIRrfdIZ0Z2Qm12Q_11mveai6jM_iDDEM",
  authDomain: "developers-arc.firebaseapp.com",
  projectId: "developers-arc",
  storageBucket: "developers-arc.appspot.com",
  messagingSenderId: "514878550515",
  appId: "1:514878550515:web:2189326b8d7c9890af2286"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
