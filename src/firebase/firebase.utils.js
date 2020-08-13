import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const Authconfig = {
    apiKey: "AIzaSyADtiGHXdnKPjKlQxM6QQ3VjzpMlcG5KvA",
    authDomain: "crwn-db-8ff23.firebaseapp.com",
    databaseURL: "https://crwn-db-8ff23.firebaseio.com",
    projectId: "crwn-db-8ff23",
    storageBucket: "crwn-db-8ff23.appspot.com",
    messagingSenderId: "254963474528",
    appId: "1:254963474528:web:9b77da516f26a71db4a305",
    measurementId: "G-EQV3PSGWXZ"
  };


  export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      }catch(err){
        console.log('error creating' + err.message);
      }
    }

    return userRef;

  };



  firebase.initializeApp(Authconfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;

