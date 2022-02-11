document.addEventListener("DOMContentLoaded",event => {
    const app = firebase.app();
    console.log(app);
})
function emailLogin()
{
    const auth = firebase.auth.getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
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