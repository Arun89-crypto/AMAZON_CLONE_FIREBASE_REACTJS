// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "Your_API_key",
    authDomain: "clone-react-firebase-b2b26.firebaseapp.com",
    projectId: "clone-react-firebase-b2b26",
    storageBucket: "clone-react-firebase-b2b26.appspot.com",
    messagingSenderId: "103758243348",
    appId: "1:103758243348:web:49fa3687b5414c5a716901",
    measurementId: "G-Y94NFT40KD"
})

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
