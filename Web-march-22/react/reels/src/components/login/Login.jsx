import React, { useState } from 'react'
// import { auth } from "../firebase";
import { connect } from "react-redux";
import { Redirect, Link } from 'react-router-dom';
import { signInMiddleWare, signOutMiddleWare } from "../../redux/reducer/authMiddleWare";
import { isLoaded } from 'react-redux-firebase';
import "./login.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Img from "../insta.jpg";
import bg1 from "./bg1.jpg";
import bg2 from "./bg2.jpg";
import bg3 from "./bg3.jpg";

// ************crousel***************
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// *****************************************
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
                    && props.firebase.auth?.uid != undefined ?
                    <Redirect to="/"></Redirect> :
                    <>
                        <div className="login_container">
                            <div className="crousel_half">
                                <div className="car">
                                    <Carousel
                                    autoPlay={true}
                                    infiniteLoop={true}
                                        showStatus={false}
                                        showArrows={false}
                                        showIndicators={false}
                                        showThumbs={false}
                                        interval={1500}
                                    >
                                        <div>
                                            <img src={bg1} />
                                        </div>
                                        <div>
                                            <img src={bg2} />
                                        </div>
                                        <div>
                                            <img src={bg3} />
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                            <div className="login_half">
                                <div className="login_card">
                                    <img src={Img}></img>

                                    <TextField
                                        id="outlined-basic"
                                        label="Email"
                                        // which type of input field you
                                        variant="outlined"
                                        type="email"
                                        placeholder="email"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        fullWidth
                                        margin="dense"
                                        size="small"
                                    ></TextField>
                                    <TextField
                                        id="outlined-basic"
                                        label="Password"
                                        // which type of input field you
                                        variant="outlined"
                                        type="password"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        fullWidth
                                        margin="dense"
                                        size="small"
                                    ></TextField>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        onClick={loginHandler}
                                    >Login</Button>
                                </div>
                                <div className="bottom_card">
                                    <div>
                                        Don't have a account ?
                                        <Link to="/signup">
                                            Signup
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>


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


















