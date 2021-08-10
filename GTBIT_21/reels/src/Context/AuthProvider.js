// context create
import React, { useState, useEffect } from "react";
import firebase from '../firebaseAuthPOC/firebase';
// 1.
export const AuthContext = React.createContext();
const auth = firebase.auth();
// reciever -> children
// firebase data get time required 
export default function AuthProvider({ children }) {
    // specific keyword by react 
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    async function genericlogin(email, password) {
        // vendor function
        return auth.signInWithEmailAndPassword(email, password);
    }
    async function genericSignup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    
    useEffect(() => {
        console.log("useEffect ran");
        function action(user) {
            console.log("line number 18", user);
            setCurrentUser(user);
            setLoading(false);
        }
        // listener -> state change auth -> login logout 
        auth.onAuthStateChanged(action);
    }, [])
    const value = {
        genericlogin,
        genericSignup,
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}