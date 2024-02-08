// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaWWt1KkJlBlRYJXaEM6ujYoBfOnB6jMM",
  authDomain: "netflixgpt-bde54.firebaseapp.com",
  projectId: "netflixgpt-bde54",
  storageBucket: "netflixgpt-bde54.appspot.com",
  messagingSenderId: "766654921310",
  appId: "1:766654921310:web:bfa8fc33fd8875b03d52cf",
  measurementId: "G-FLDKC8T9G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);