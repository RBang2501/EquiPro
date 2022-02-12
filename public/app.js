import { getAuth, sendSignInLinkToEmail } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
document.addEventListener("DOMContentLoaded",event => {
    const app = firebase.app();
    console.log(app);
})
function emailLogin(emailName)
{
    console.log("! "+emailName);
    ActionCodeSettings={
        url: "https://sportech-b3840.web.app/",
        handleCodeInApp: true
    }
    const auth = getAuth();
    console.log("!");
    sendSignInLinkToEmail(auth, emailName, ActionCodeSettings)
        .then((userCredential) => {
            // Signed in
            window.localStorage.setItem('emailForSignIn',email);
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
    console.log("!");
}