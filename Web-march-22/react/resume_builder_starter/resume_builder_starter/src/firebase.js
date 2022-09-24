// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// 1. import
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyDAEQAn1DSTd-hM7pHJFwvkGyNRS6dCm0Y",
    authDomain: "resume-builder-129ec.firebaseapp.com",
    projectId: "resume-builder-129ec",
    storageBucket: "resume-builder-129ec.appspot.com",
    messagingSenderId: "122273798409",
    appId: "1:122273798409:web:26287cd9ecba825c88dbd8"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;


