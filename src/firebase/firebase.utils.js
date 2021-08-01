import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBzVmy_szGFy1n1ft-XDl5ToS6eU9u4T_s",
  authDomain: "crwn-db-80b05.firebaseapp.com",
  projectId: "crwn-db-80b05",
  storageBucket: "crwn-db-80b05.appspot.com",
  messagingSenderId: "608969631191",
  appId: "1:608969631191:web:ee4f574f87fa3b96e39792",
  measurementId: "G-YM937Y2K4M",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
