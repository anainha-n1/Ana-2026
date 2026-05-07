// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeIzeaHmyMEMgObrpr6dVxpEY4UZ1iJLI",
  authDomain: "listacompras-d9d0a.firebaseapp.com",
  projectId: "listacompras-d9d0a",
  storageBucket: "listacompras-d9d0a.firebasestorage.app",
  messagingSenderId: "674769438503",
  appId: "1:674769438503:web:4ebb98d487b41c696c0b02",
  measurementId: "G-NZRFZZZ9KY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);