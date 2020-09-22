// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmhPOtZ0iF05zLgSWVTYNdp-28U57N8LQ",
  authDomain: "clone-f4e68.firebaseapp.com",
  databaseURL: "https://clone-f4e68.firebaseio.com",
  projectId: "clone-f4e68",
  storageBucket: "clone-f4e68.appspot.com",
  messagingSenderId: "337282983755",
  appId: "1:337282983755:web:dbb03e6de4030b530caace",
  measurementId: "G-2YLRFVSLCW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
