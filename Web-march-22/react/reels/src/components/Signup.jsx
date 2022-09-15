import React, { useState, useEffect } from "react";
import { auth, database, storage } from "../firebase";
import { signUpMiddleWare } from "../redux/reducer/authMiddleWare";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { isLoaded } from "react-redux-firebase";
function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [filePath, setFilePath] = useState("")
  async function signupHandler() {
    // alert(email + " " + password + " " + name)
    try {
      if (email == "" || password == "" || name == "" || filePath == "") {
        alert("All fields are required");
        return;
      }
      let obj = {
        email, password, name, filePath
      }
      props.signupWithFirebase(obj)
    } catch (err) {
      alert(err.message);
    }
  }

  return (

    <>{
      isLoaded(props.firebase.auth) && props.firebase.auth?.uid != undefined ? 
      <Redirect to="/"></Redirect> :
        <>

          <div>Signup Page </div>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <br></br>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br></br>
          {/* uncontrolled input -> input type file  */}
          <input type="File" onChange={(e) => {
            setFilePath(e.target.files[0]);
            console.log(e.target.files)
          }}></input>
          <br></br>
          <button onClick={signupHandler}>Signup</button>
        </>
    }</>

  );
}
function mapStateToProps(store) {
  console.log("store", store);
  return {
    auth: store.auth,
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

export default connect(mapStateToProps,
  mapDispatchToProps)(Signup);






