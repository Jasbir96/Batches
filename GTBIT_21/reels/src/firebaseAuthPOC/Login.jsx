import React, { useState, useEffect } from 'react'
import firebase from './firebase';
// authectication use 
const auth = firebase.auth();
function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [userId, setuserId] = useState("");
    let [loginLoder, setLoginLoader] = useState(false);
    let [error, setError] = useState("");
    const loginFn = async () => {
        try {
            setLoginLoader(true);
            // firebase 
            let res = await auth.signInWithEmailAndPassword(email, password);
            // unique id
            console.log(res.user.uid);
            setLoginLoader(false)
            setuserId(res.user.uid)
        } catch (err) {
            setLoginLoader(false);
            setError(err.message);
            setTimeout(() => {
                setError(false);
            }, 2000);
        }
    }
    const logoutFn = async () => {
        try {
            setLoginLoader(true);
            await auth.signOut();            // unique id
            setLoginLoader(false)
            setuserId("");
        } catch (err) {
            setLoginLoader(false);
            setError(err.message);
            setTimeout(() => {
                setError(false);
            }, 2000);
        }
    }
    // useEffect will only run once 
    // eventlistener -> attach 
    // -> auth state change
    //  -> 
    // component did mount 
    useEffect(() => {
        console.log("useEffect ran");
        function action(user) {
            console.log(user);
            let finalUser = user ? user.uid : null
            setuserId(finalUser);
        }
        // listener -> state change auth -> login logout 
        auth.onAuthStateChanged(action);
    }, [])

    return (
        // form will available
        loginLoder == true ? <h1>Loading....</h1>
            : userId ?<>
                    <h1>{userId}
                    </h1>
                    <button
                        onClick={logoutFn}
                    >Logout</button>
                </>
                : <div>
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
