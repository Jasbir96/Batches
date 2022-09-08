import React, { useState, useEffect } from "react";
import { auth, database, storage } from "../firebase";
import { signUpMiddleWare } from "../redux/reducer/authMiddleWare";
import { connect } from "react-redux";
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
  // useEffect(function () {
  //   // get
  //   async function fn() {
  //     const docSnap = await database
  //     .users.doc("cQs3NYCarKcDWLWxOZK8PafFNEu2").get();
  //     let user = docSnap.data();
  //     console.log(user);
  //   }
  //   fn();
  // }, [])
  return (
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
  );
}
function mapStateToProps() {

}

function mapDispatchToProps(dispatch) {
  return {
    signupWithFirebase: function () {
      dispatch(signUpMiddleWare(userDataOBj));

    }
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps)(Signup);






