import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDc-KU6Ln6IgozqJhOn5SVgG4LrhyhufSY",
  authDomain: "youandmewebcreations-2b76d.firebaseapp.com",
  databaseURL: "https://youandmewebcreations-2b76d.firebaseio.com",
  projectId: "youandmewebcreations-2b76d",
  storageBucket: "youandmewebcreations-2b76d.appspot.com",
  messagingSenderId: "365687070368",
  appId: "1:365687070368:web:c9e3edac2a98e0935c33c5",
  measurementId: "G-PNY1FGXQBV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
