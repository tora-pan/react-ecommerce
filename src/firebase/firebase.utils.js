import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDXguuYsNinuDwuLzrBz8n2NX-dcTzCcp4",
  authDomain: "pandos-store.firebaseapp.com",
  projectId: "pandos-store",
  storageBucket: "pandos-store.appspot.com",
  messagingSenderId: "887849857025",
  appId: "1:887849857025:web:4012998314d7b263a59000",
  measurementId: "G-7KHTCFY53N",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//time to config the firebase util for Google authen.
const provider = new firebase.auth.GoogleAuthProvider();
//set custom params
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//incase we want all of it
export default firebase;
