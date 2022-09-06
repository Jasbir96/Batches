import React, { useState } from 'react'
// import { auth } from "../firebase";
import { connect } from "react-redux";
import { signInMiddleWare ,signOutMiddleWare } from "../redux/reducer/authMiddleWare";
function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function loginHandler() {
        props.loginWithFirebase(email, password);
        setEmail("");
        setPassword("");
    }
    return (
        <>
            {
                props?.auth?.isloggedIn == true ? <button onClick={props.logout}>Signout</button > :
                    <>
                        <h1>Login</h1>
                        <input type="text" placeholder="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        ></input>
                        <br></br>
                        <input type="password" placeholder="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        ></input>
                        <button
                            onClick={loginHandler}
                        >Login</button>
                    </>
            }
        </>


    )
}
function mapStateToProps(store) {
    console.log("store", store);
    return {
        auth: store.auth,
        firebase: store.firebase
    };
}
function mapDispatchToProps(dispatch) {
    return {
        loginWithFirebase: (email, password) => {
            dispatch(signInMiddleWare(email, password))
        },
        logout: () => {
            dispatch(signOutMiddleWare());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)
    (Login);


















