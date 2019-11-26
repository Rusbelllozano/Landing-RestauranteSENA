import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import "firebase/storage"
var firebaseConfig = {
    apiKey: "AIzaSyC2BvGDU-wK-h-Fps0Wt4std_FWBOKdEXI",
    authDomain: "restaurante-senarsle.firebaseapp.com",
    databaseURL: "https://restaurante-senarsle.firebaseio.com",
    projectId: "restaurante-senarsle",
    storageBucket: "restaurante-senarsle.appspot.com",
    messagingSenderId: "65478677273",
    appId: "1:65478677273:web:4dccb3fe87a7a6a9"
  };
  // Initialize Firebase 
  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''
  const auth= firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage(); 
  export {auth,db,storage};