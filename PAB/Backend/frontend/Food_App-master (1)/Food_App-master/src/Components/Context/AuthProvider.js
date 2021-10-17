import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

export const AuthContext = React.createContext();
//custom hook that allows components to access context data
export function useAuth() {
    return useContext(AuthContext)
}
function AuthProvider({ children }) {
    const history = useHistory();
    const [user, userSet] = useState("");
    const [loading, setLoading] = useState(false);
    function signUp(user) {
        userSet(user);
    }
    async function login(email, password) {
        try {
            const data = await axios.post("/api/users/login", {
                email: email,
                password: password
            });
            userSet(data.data);
            localStorage.setItem("user", JSON.stringify(data.data));
            return data;
        }
        catch (err) {
            console.log(err);
        }
    }
    function logout() {
        localStorage.removeItem("user")
        userSet(null);
    }

    useEffect(async () => {
        let data = localStorage.getItem("user");
        // console.log(data);
        if (data) {
            userSet(JSON.parse(data));
            history.push("/");
        } else {
            userSet(null);
        }
    }, [])

    const value = {
        user,
        login,
        signUp,
        logout
    }
    return (
        < AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider >
    )
}

export default AuthProvider
