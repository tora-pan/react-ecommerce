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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
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
