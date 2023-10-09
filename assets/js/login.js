alert("Welcome to Login Page!");
/*login.addEventListener('click',(e)=>{

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const dt = new Date();
        update(ref(database, '/users' + user.id),{
            last_login:dt,
        });
        alert('Login Successful!');
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Incorrect email / password! Try Again Later!');
    });

    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });

});*/