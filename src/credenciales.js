// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ0SnhwdUH0pcknWmmuV_C1BZCDm-ShJE",
  authDomain: "garzalance-login.firebaseapp.com",
  projectId: "garzalance-login",
  storageBucket: "garzalance-login.appspot.com",
  messagingSenderId: "533068818744",
  appId: "1:533068818744:web:713606ed9da7f62058b9cd",
  measurementId: "G-V3X1EL64ZH"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
export default appFirebase;