import React, { useState } from 'react'
// import { auth } from "../firebase";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { signInMiddleWare, signOutMiddleWare } from "../redux/reducer/authMiddleWare";
import { isLoaded } from 'react-redux-firebase';

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
                isLoaded(props.firebase.auth) 
                &&props.firebase.auth?.uid != undefined ? 
                <Redirect to="/"></Redirect> :
                    <>
                        <h1>Login</h1>
                        <input type="email" placeholder="email"
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


















