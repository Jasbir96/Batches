import React, { useState, useEffect } from "react";
import { auth, database, storage } from "../../firebase";
import { signUpMiddleWare } from "../../redux/reducer/authMiddleWare";
import { connect } from "react-redux";
// ****************react router dom ************
import { Redirect ,Link} from "react-router-dom";
import { isLoaded } from "react-redux-firebase";
// **************material ui****************** 
import TextField from '@mui/material/TextField';
import "./signup.css";
import Img from "../insta.jpg";
import Button from '@mui/material/Button';
// ********************************************


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
          <div className="signup_container">
            <div className="signup_card">
              <img src={Img}></img>
              <TextField
                id="outlined-basic"
                label="Email"
                // which type of input field you
                variant="outlined"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                size="small"
                fullWidth
                margin="dense"
              />
              <TextField
                id="outlined-basic"
                label="Password"
                // which type of input field you
                variant="outlined"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                size="small"
                fullWidth
                margin="dense"

              ></TextField>
              <TextField
                id="outlined-basic"
                label="Full Name"
                // which type of input field you
                variant="outlined"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                size="small"
                fullWidth
                margin="dense"

              />
              {/* uncontrolled input -> input type file  */}
              <Button variant="outlined"
                // html kis element ki tarah behave
                component="label"
                fullWidth
                style={{ marginTop: "1rem" }}
              >
                <input type="File" onChange={(e) => {
                  setFilePath(e.target.files[0]);
                  console.log(e.target.files)
                }}
                  style={{ display: 'none' }}
                ></input>
                Upload
              </Button>
              < Button
                fullWidth
                variant="contained"
                onClick={signupHandler}
                style={{ marginTop: "1rem" }}

              >
                Signup
              </Button>

            </div>
            <div className="bottom_card">
              <div>
                Already Have an Account ?
              </div>
              <Link to="/login">
                Login
              </Link>

            </div>

          </div>

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






