import React, { useState } from 'react';
import '../Styles/login.css'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useAuth } from '../Context/AuthProvider';
function ForgetPassword() {
    const [email, emailSet] = useState("");
    const { setResetEmail } = useAuth();
    const history = useHistory();
    const sendEmail = async () => {
        // request -> forgetPassword Route
        try {
            let res = await axios.patch("/api/v1/auth/forgetPassword", { email });

            alert("Mail send to your registerd email ID");
            setResetEmail(email);
            // send to your restpasswordPage
            history.push("/otp");

        } catch (err) {
            console.log(err.message);
            if (err.message == "Request failed with status code 404") {
                alert("user with this email not found");
            } else if (err.message == "Request failed with status code 500") {
                alert("Internal server error");
            }
        }
        // send to resetPassword Page
    }
    return (
        <div className="container-grey">
            <div className="form-container">
                <div className='h1Box'>
                    <h1 className='h1'>FORGET PASSWORD</h1>
                    <div className="line"></div>
                </div>
                <div className="loginBox">
                    <div className="entryBox">
                        <div className="entryText">Email</div>
                        <input className="email input"
                            type="email" name="Email" placeholder="Your Email"
                            onChange={(e) => emailSet(e.target.value)} />
                    </div>
                    <button className="loginBtn  form-button"
                        onClick={sendEmail}>
                        Send Email
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
