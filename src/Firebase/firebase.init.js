// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtIeoxIfi6d2NAB_hnjD4UeIcDrmEvnd0",
  authDomain: "email-password-auth-b73aa.firebaseapp.com",
  projectId: "email-password-auth-b73aa",
  storageBucket: "email-password-auth-b73aa.firebasestorage.app",
  messagingSenderId: "165873779015",
  appId: "1:165873779015:web:252f66db8b4f6f275fcc62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);