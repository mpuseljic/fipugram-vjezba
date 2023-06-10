import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCDCUlvr4ev4GyychMTKCHB8x83s_vCRLU",
    authDomain: "fipugram-1da5d.firebaseapp.com",
    projectId: "fipugram-1da5d",
    storageBucket: "fipugram-1da5d.appspot.com",
    messagingSenderId: "840150361537",
    appId: "1:840150361537:web:ae62876584c60a25733b40"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export { firebase, db };