import "firebase/firestore"
import "firebase/auth"
import firebase from "firebase/compat";

const config = {
    apiKey: "AIzaSyBwD-Qn7VA52HHbBQT7J6JLeIrU7xBWlTY",
    authDomain: "crw-db-c67ab.firebaseapp.com",
    projectId: "crw-db-c67ab",
    storageBucket: "crw-db-c67ab.appspot.com",
    messagingSenderId: "771648952918",
    appId: "1:771648952918:web:4284e60d8c14be21fdb9f7",
    measurementId: "G-4Z40CLQVRE"
}

firebase.initializeApp(config);

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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
