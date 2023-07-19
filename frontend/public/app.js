import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyDSmTlPi8InpwSpuhf5l4hGY6a79nfwkMs",
    authDomain: "sportech-5fdc4.firebaseapp.com",
    projectId: "sportech-5fdc4",
    storageBucket: "sportech-5fdc4.appspot.com",
    messagingSenderId: "829294555954",
    appId: "1:829294555954:web:cc1c16a2d4668735cddd2b",
    measurementId: "G-0W1XGNDPN2"
};
const app = initializeApp(firebaseConfig);
document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
})
document.emailsignup = function emailsignup(emailName, pwd) {
    console.log("!");
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailName.value, pwd.value)
        .then((userCredential) => {
            // Signed in
            console.log("!");
            const user = userCredential.user;
            window.location.href = "tea_flower/index.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            // ..
        });
}
document.emailsignin = function emailsignin(emailName, pwd) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailName.value, pwd.value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            window.location.href = "tea_flower/index.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            // ..
        });
}
document.additem = function additem(quantities) {

}