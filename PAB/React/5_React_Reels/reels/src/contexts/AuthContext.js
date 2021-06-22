import React, { useState, useEffect } from 'react';
import auth from '../firebase';

export const AuthContext = React.createContext();
export function AuthProvider({ children }) {
    const [currentUser, setUser] = useState();
    const [loading, setLoading] = useState(true);
    async function login(email, password) {
        // firebase
        return await auth.signInWithEmailAndPassword(email, password);

    }
    async function signOut() {
        // firebase signup
        return await auth.signOut();
    }
    useEffect(() => {
        // eventListener
        console.log("added event Listener")
        let cleanUp = auth.onAuthStateChanged(user => {
            console.log("user", user);
            setUser(user);
            setLoading(false)
        })
        return cleanUp;
    }, []);
    const value = {
        login,
        signOut, currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>

    )
}
