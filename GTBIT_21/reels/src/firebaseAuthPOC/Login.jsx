import React, { useState } from 'react'
import firebase from './firebase';
// authectication use 
const auth = firebase.auth();
function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const loginFn = async () => {
        // email,password -> firebase 
        // *******firebase console
        // auth start
        // enable -> email and password
        // user create on firebase side 

        // npm i firebase ` -> local machine 
        // firebase login
        let res = await auth.signInWithEmailAndPassword(email, password);
        // unique id 
        console.log(res.user.uid);
    }
    return (
        <div >
            <div> Email:
                <input type="Email" placeholder="Your Email" value={email} 
                onChange={function (e) {
                    // logicsetEmail(e.target.value)
                }} />
            </div>
            <div>Password:
                <input type="password" placeholder="********" value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }}
                />
            </div>
            <button onClick={loginFn}>Login</button>
        </div>
    )
}
export default Login
