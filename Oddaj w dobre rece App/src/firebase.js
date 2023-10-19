// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZC3ALB1NppPk8VmQrM6va1uM-NHv_FC4",
    authDomain: "oddaj-w-dobre-rece-app-8061f.firebaseapp.com",
    projectId: "oddaj-w-dobre-rece-app-8061f",
    storageBucket: "oddaj-w-dobre-rece-app-8061f.appspot.com",
    messagingSenderId: "340772601003",
    appId: "1:340772601003:web:ecaad36bf668f3492c4bee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export default app