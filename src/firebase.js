// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXQnWAn_nB8Cq3G2W0tyhpT1s2NecSVHs",
  authDomain: "bobfrontend.firebaseapp.com",
  projectId: "bobfrontend",
  storageBucket: "bobfrontend.appspot.com",
  messagingSenderId: "491609992523",
  appId: "1:491609992523:web:bfeea223f263bcee970cce",
  measurementId: "G-9DSWVG8QMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;