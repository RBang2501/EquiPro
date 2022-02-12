import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth, sendSignInLinkToEmail } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
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
document.emailLogin=function emailLogin(emailName)
{
    console.log("! "+emailName.value);
    const ActionCodeSettings={
        url: "https://sportech-b3840.web.app/",
        handleCodeInApp: true
    }
    const auth = getAuth();
    sendSignInLinkToEmail(auth, emailName, ActionCodeSettings)
        .then((userCredential) => {
            // Signed in
            window.localStorage.setItem('emailForSignIn',emailName.value);
            const user = userCredential.user;
            document.write("Hello "+user.displayName);
            console.log("Hello "+user.displayName);
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