import firebase from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7cz9BguSl1l3kS-dw1PkzIdP_3SyYB_Q",
    authDomain: "chat116.firebaseapp.com",
    databaseURL: "https://chat116-default-rtdb.firebaseio.com",
    projectId: "chat116",
    storageBucket: "chat116.appspot.com",
    messagingSenderId: "826457934791",
    appId: "1:826457934791:web:912e4329acd28f3dd727e2"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);