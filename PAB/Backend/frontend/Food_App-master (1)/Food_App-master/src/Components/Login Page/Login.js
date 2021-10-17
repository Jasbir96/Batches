import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import '../Styles/login.css'

function Login() {

    const history = useHistory();
    const [password, passwordSet] = useState("")
    const [email, emailSet] = useState("");
    const [loading, setLoading] = useState(false);
    const {login, user} = useContext(AuthContext);



    const handleLogin = async () => {
        try {
            // console.log(email,password)
            await login(email, password)
            history.push("/")
          } catch(err) {
            console.log(err);
          }
    }

    return (
        <div className="container-grey">
            <div className="form-container">
                <div className='h1Box'>
                    <h1 className='h1'>LOGIN</h1>
                    <div className="line"></div>
                </div>

                <div className="loginBox">
                    <div className="entryBox">
                        <div className="entryText">Email</div>
                        <input className="email input" type="email" name="Email" placeholder="Your Email" required="" onChange={(e) => emailSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Password</div>
                        <input className="password input" type="password" name="Password" placeholder="**********" onChange={(e) => passwordSet(e.target.value)} />
                    </div>
                    <button className="loginBtn  form-button" type="submit" onClick={handleLogin}>
                        Login
                    </button>
                    <div className='otherOption'>
                        <button className=" otherbtns form-button" type="submit" >
                            <Link to="/signup" className="otherbtns">Sign Up</Link>
                        </button>
                        <button className=" otherbtns form-button" type="submit">
                            <Link to="/forgetPassword" className="otherbtns">Forget Password</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;