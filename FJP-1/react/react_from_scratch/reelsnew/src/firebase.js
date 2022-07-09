// npm i firebase
// src ->  create firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import secret from "./secrets";
let app = initializeApp(secret);
// from these three you are able to include firebase in your react app
export let auth = getAuth(app);
export const db = getFirestore(app);