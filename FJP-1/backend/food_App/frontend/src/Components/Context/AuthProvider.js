import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
export const AuthContext = React.createContext();
//custom hook that allows components to access context data
export function useAuth() {
    return useContext(AuthContext);
}
// sync -> if you have a user or not on login and logout 
// It also exposes you lossley coupled auth functions
// 
function AuthProvider({ children }) {
    // const history = useHistory();
    const [user, userSet] = useState("");
    const [loading, setLoading] = useState(false);
    async function signUp(name, password, email, confirm) {
        try {
            console.log("signup will be here");
            let res = await axios.post
                ("/api/v1/auth/signup", {
                    name: name,
                    password: password,
                    confirmPassword: confirm,
                    email
                })
            console.log("data", res.data);

        } catch (err) {
            console.log("err", err.message);
        }
    }
    async function login(email, password) {
        try {
            setLoading(true);
            const res = await axios.post("/api/v1/auth/login", {
                email: email,
                password: password
            });
            setLoading(false);
            // console.log("40",res.data);
            userSet(res.data.user);
        }
        catch (err) {
            console.log(err);
            setLoading(false);
        }
        console.log("login will be here");
    }
    function logout() {
        // localStorage.removeItem("user")
        // userSet(null);
        console.log("logout will come here");
    }

    const value = {
        user,
        login,
        signUp,
        logout
    }
    return (
        < AuthContext.Provider value={value} >
            {/* if not loading show childrens  */}
            {!loading && children}
        </AuthContext.Provider >
    )
}
export default AuthProvider
