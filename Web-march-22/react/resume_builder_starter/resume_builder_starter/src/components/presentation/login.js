import React, { useEffect, useState } from "react";
import update from 'immutability-helper';
// import { connect } from "react-redux";
// import {bindActionCreators} from 'redux';
// import * as authActions from '../../actions/authActions';
// import { isLoaded } from 'react-redux-firebase'
import { useHistory } from "react-router";
import{ connect} from "react-redux";
import { isLoaded } from 'react-redux-firebase';
import {Redirect} from "react-router-dom";
import {signInMiddleWare} from "../../redux/reducers/auth/authMiddleWare"

function Login(props) {
  console.log(props);
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // useEffect(() => {
  //   if(props.auth?.uid){
  //     history.push('/')
  //   }
  // }, [props])
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const onSubmit = () => {

    props.loginWithFirebase(email, password);
  }


  return (
    <>
      {/* If we visit the login being signed in we will be unable to see the form */}
      <>
        {isLoaded(props.firebase.auth)
          && props.firebase.auth?.uid != undefined ?
          <Redirect to="/"></Redirect> :
          <div className="container med contact">
            <div className="section funnel-section">
              <div className="form-card">
                <h2 className="form-heading center">Enter Login details</h2>
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
                    <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Login</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        }
      </>

    </>
  );
}
function mapStateToProps(store) {
  return {
    auth: store.auth,
    firebase: store.firebase
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loginWithFirebase: (email, password) => {
      dispatch(signInMiddleWare(email, password))
    }
  }
}




// login -> middleware ->? firebase help login 
export default connect(mapStateToProps, mapDispatchToProps)(Login);