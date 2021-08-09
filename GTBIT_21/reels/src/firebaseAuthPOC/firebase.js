import firebaseConfig from "../secrets";
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/storage';
import 'firebase/firestore'
const firestore = firebase.firestore();
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
// collection/>>
export const database = {
    users: firestore.collection('users')
}
export default firebase;