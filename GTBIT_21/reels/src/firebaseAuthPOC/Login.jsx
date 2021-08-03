import React, { useState } from 'react'
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
    return (
        // form will available
        loginLoder == true ? <h1>Loading....</h1> 
        :userId ? <h1>{userId}</h1> 
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
                        {error ? <h1>{error}</h1>:<></> }
                    </div >
    )
}
export default Login
