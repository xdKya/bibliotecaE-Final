import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVB3zv1_0A3v03ldLgSHmpaJ74zYE5w8Q",
  authDomain: "bibliotecae-f14a4.firebaseapp.com",
  projectId: "bibliotecae-f14a4",
  storageBucket: "bibliotecae-f14a4.appspot.com",
  messagingSenderId: "19966462064",
  appId: "1:19966462064:web:fe6a51edc1de1011ed4cb5",
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
