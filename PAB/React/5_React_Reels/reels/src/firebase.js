import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
let object = require("./secrets");
firebase.initializeApp(object);
let auth = firebase.auth();
export default auth;
