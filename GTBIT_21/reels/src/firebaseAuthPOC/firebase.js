import firebaseConfig from "../secrets";
import firebase from "firebase/app";
import "firebase/auth";
firebase.initializeApp(firebaseConfig);
export default firebase;