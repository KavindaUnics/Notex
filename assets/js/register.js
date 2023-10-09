alert('Welcome to Registration Page!');
/*// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getFirestore, setDoc, addDoc, doc, collection } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs7h0fI628lTaA0CyXfh1Dn-cTBX5twcw",
  authDomain: "notex-71619.firebaseapp.com",
  projectId: "notex-71619",
  storageBucket: "notex-71619.appspot.com",
  messagingSenderId: "353402332777",
  appId: "1:353402332777:web:db3442a9af5793294864f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

register.addEventListener('click',(e) => {

    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var email = document.getElementById('email_address').value;
    var password = document.getElementById('password').value;
    var renter_password = document.getElementById('renter_password').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        set(ref(database, '/users' + user.id),{
            first_name:first_name,
            last_name:last_name,
            email:email
        });
        alert('Registration Successful')
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
        alert('Sorry! Try Again!');
    });
});*/