import firebaseConfig from "../secrets";
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/storage';
import 'firebase/firestore'
firebase.initializeApp(firebaseConfig);
// firestore -> database user details add
const firestore = firebase.firestore();
// asset store 
export const storage = firebase.storage();

// collection>>
export const database = {
    users: firestore.collection('users'),
    reels: firestore.collection('reels'),
    createdAt: firestore.FieldValue,
}
export default firebase;