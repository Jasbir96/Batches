import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from "../Context/AuthProvider";
// authectication use 
function Login(props) {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [loginLoder, setLoginLoader] = useState(false);
    let [error, setError] = useState("");
    // usage
    let { genericlogin, currentUser } = useContext(AuthContext);
    const loginFn = async () => {
        try {
            setLoginLoader(true);
            // firebase 
            await genericlogin(email, password);
            // unique id
            setLoginLoader(false);
        } catch (err) {
            setLoginLoader(false);
            setError(err.message);
            setTimeout(() => {
                setError(false);
            }, 2000);
        }
    }
    console.log("Inside login componenet");
    // as soon as you loggedIn  You send the user to feed page   
    useEffect(() => {
        if (currentUser) {
            // send to feed page
            // loggedIN 
            props.history.push('/feed');
        }
    },);
    return (
        // form will available
        loginLoder == true ? <h1>Loading....</h1> : <div>
            <div> Email:
                <input type="Email" placeholder="Your Email" value={email}
                    onChange={function (e) {
                        // logic
                        setEmail(e.target.value)
                    }} />
            </div>
            <div>Password:
                <input type="password" placeholder="********" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }}
                />
            </div>
            <button onClick={loginFn}>Login</button>
            {error ? <h1>{error}</h1> : <></>}
        </div >
    )
}
export default Login;
