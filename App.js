// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCiOpgUYVJDSdJYn9hWvkUwN75fBZenheM",
    authDomain: "sportech-b3840.firebaseapp.com",
    projectId: "sportech-b3840",
    storageBucket: "sportech-b3840.appspot.com",
    ssagingSenderId: "719432324696",
    appId: "1:719432324696:web:a77c03a73b1fd24e0f1c2d",
    measurementId: "G-02DKHENZ02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);