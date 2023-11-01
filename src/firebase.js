import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD2Khbs_WVeLjxxPfppcjXQzAlKssQAxa8",
    authDomain: "clone-shk.firebaseapp.com",
    projectId: "clone-shk",
    storageBucket: "clone-shk.appspot.com",
    messagingSenderId: "162950494428",
    appId: "1:162950494428:web:852f3c0ba41ba815a9dc19",
    measurementId: "G-WDKQY2NEKS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };