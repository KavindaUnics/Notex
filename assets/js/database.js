const firebaseConfig = {
    apiKey: "AIzaSyCWfQ79tnAng-vaItZIjX5Qy6Ywq9sYS2Q",
    authDomain: "notex-7049f.firebaseapp.com",
    databaseURL: "https://notex-7049f-default-rtdb.firebaseio.com",
    projectId: "notex-7049f",
    storageBucket: "notex-7049f.appspot.com",
    messagingSenderId: "877284346395",
    appId: "1:877284346395:web:308085f34ff1bb492c46be"
};

firebaseConfig.initializeApp(firebaseConfig);
var db = firebase.firestore();
const auth = firebase.auth();