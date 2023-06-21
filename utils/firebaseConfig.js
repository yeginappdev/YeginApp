// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1L-2wZLilMPKc4MpazEgG1ZXIWBabubU",
  authDomain: "yeginapp.firebaseapp.com",
  projectId: "yeginapp",
  storageBucket: "yeginapp.appspot.com",
  messagingSenderId: "1061520595577",
  appId: "1:1061520595577:web:fd9ed598dfc8ed103552a8",
  measurementId: "G-1P8X763BMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);