import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAPhIpSz0unSAyABaf9x3GxM1kn339dVLQ",
    authDomain: "react-coder-6cb66.firebaseapp.com",
    projectId: "react-coder-6cb66",
    storageBucket: "react-coder-6cb66.appspot.com",
    messagingSenderId: "842400680158",
    appId: "1:842400680158:web:65fcdf549e590b2045da4f",
    measurementId: "G-JGG4JMJNMY"
  };

const app = firebase.initializeApp(firebaseConfig);
export const firestore = app.firestore()