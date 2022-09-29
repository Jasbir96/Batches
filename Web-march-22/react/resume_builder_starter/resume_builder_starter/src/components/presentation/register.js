import React, { useState, useEffect } from "react";
import { isLoaded } from 'react-redux-firebase'
import { connect } from "react-redux";
import { signUpMiddleWare } from "../../redux/reducers/auth/authMiddleWare";
import {Redirect} from "react-router-dom";
function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const onSubmit = () => {
    props.signupWithFirebase({ email: email, password: password })
  }
  return (
    <>
      {isLoaded(props.firebase.auth) && props.firebase.auth?.uid != undefined ?
        <Redirect to="/"></Redirect> :

      <div className="container med contact">
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Enter your details</h2>
            <div className="form-section">
              <div className="input-group full"><label>Email</label>
                <div className="effect"><input type="text" name="email" value={email || ''} onChange={handleEmail} /><span></span>
                </div>
              </div>
              <div className="input-group full"><label>Password</label>
                <div className="effect"><input type="password" name="password" value={password || ''} onChange={handlePassword} /><span></span>
                </div>
              </div>
              <div className="form-buttons">
                <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Register</button>
              </div>

            </div>
          </div>

        </div>
      </div>
      }
    </>
  );
}
function mapStateToProps(store) {
  return {
    firebase: store.firebase
  }
}
function mapDispatchToProps(dispatch) {
  return {
    signupWithFirebase: function (userDataOBj) {
      dispatch(signUpMiddleWare(userDataOBj));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);