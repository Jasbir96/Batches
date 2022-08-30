// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnubDLp4n7wERXJPRq3peWsjRoEvflcnY",
    authDomain: "instareels-26712.firebaseapp.com",
    projectId: "instareels-26712",
    storageBucket: "instareels-26712.appspot.com",
    messagingSenderId: "594411697893",
    appId: "1:594411697893:web:05fd5770948f578598060c"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const googleAuth = new firebase.auth.GoogleAuthProvider();
export default firebase;
export const auth=firebase.auth();


