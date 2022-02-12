import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyCiOpgUYVJDSdJYn9hWvkUwN75fBZenheM",
    authDomain: "sportech-b3840.firebaseapp.com",
    projectId: "sportech-b3840",
    storageBucket: "sportech-b3840.appspot.com",
    ssagingSenderId: "719432324696",
    appId: "1:719432324696:web:a77c03a73b1fd24e0f1c2d",
    measurementId: "G-02DKHENZ02"
};
const app = initializeApp(firebaseConfig);
document.addEventListener("DOMContentLoaded",event => {
    const app = firebase.app();
    console.log(app);
})
document.emailsignup=function emailsignup(emailName, pwd, admin)
{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailName.value, pwd.value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
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
document.emailsignin=function emailsignin(emailName, pwd, admin)
{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailName.value, pwd.value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
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
document.additem=function additem(quantities)
{

}