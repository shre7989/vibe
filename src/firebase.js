import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMAsWkT9PIrbJVKZUOin3Fs3HT821jvTw",
  authDomain: "vibe-fc098.firebaseapp.com",
  projectId: "vibe-fc098",
  storageBucket: "vibe-fc098.appspot.com",
  messagingSenderId: "747926607336",
  appId: "1:747926607336:web:0dfd8f4bdb0d8d1ad8c05d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
