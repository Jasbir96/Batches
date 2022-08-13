import React, { useState } from 'react';
import '../Styles/login.css'
// import axios from 'axios';
// import { connect } from 'react-redux';
// import { useHistory } from 'react-router-dom';

function ForgetPassword() {
    const [email, emailSet] = useState("");
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
                        <input className="email input" type="email" name="Email" placeholder="Your Email" required="" onChange={(e) => emailSet(e.target.value)} />
                    </div>
                    <button className="loginBtn  form-button" type="submit">
                        Send Email
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
