// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1gqq035n2ExTHOL2h_CBLouSPfllzadk",
    authDomain: "b9-a9-9ccf9.firebaseapp.com",
    projectId: "b9-a9-9ccf9",
    storageBucket: "b9-a9-9ccf9.appspot.com",
    messagingSenderId: "877566880967",
    appId: "1:877566880967:web:17c9a213ee44a9cd4b22e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)