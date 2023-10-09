// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuewHHNYhzrvoIaAUKT0do173bMUQSJj4",
    authDomain: "todo-app-5c5c3.firebaseapp.com",
    projectId: "todo-app-5c5c3",
    storageBucket: "todo-app-5c5c3.appspot.com",
    messagingSenderId: "107888712959",
    appId: "1:107888712959:web:aedeb581f9421cf4bdc0ca",
    measurementId: "G-Z0DDNPK69W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export { auth };