import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCoPZr83l7qiyxGULiehN1D4FIXGmnk1Wo",
    authDomain: "nutritions-65428.firebaseapp.com",
    projectId: "nutritions-65428",
    storageBucket: "nutritions-65428.appspot.com",
    messagingSenderId: "272549636967",
    appId: "1:272549636967:web:ba3ac6d9c5f50d38c5ddc2",
    measurementId: "G-F89MENQY9H"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async(userAuth, additionalData) => {
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
        console.log('error creating user', error.message)
      }
    }
    return userRef;
  };


  export const addCollectionsAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj)
    });

    return await batch.commit();
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  // facebook authentication

  // const facebookAuth = new firebase.auth.FacebookAuthProvider();
  // facebookAuth.setCustomParameters({ propt: 'select_account' });
  // export const signInWithFacebook = () => auth.signInWithPopup(facebookAuth)

  export default firebase;