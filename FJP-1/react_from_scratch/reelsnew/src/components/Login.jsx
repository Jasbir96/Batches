import React, { useState } from 'react'
import { auth, } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  
  let [user, setUser] = useState(null);
  let [loader, setLoader] = useState(false);
  let [error, setError] = useState("");
  const trackEmail = function (e) {
    setEmail(e.target.value);
  }
  const trackPassword = function (e) {
    setPassword(e.target.value);
  }
  const printDetails = async function () {
    // alert(email + " " + password);
    try {
      setLoader(true);
      let userCred = await
        signInWithEmailAndPassword(auth, email, password)
      // console.log(userCred.user);
      setUser(userCred.user);
    } catch (err) {
      setError(err.message);
      // after some time -> error message remove 
      setTimeout(() => {
        setError("")
      }, 2000)
    }
    setLoader(false);
  }
  return (
    <>
      {
        error != "" ? <h1>Error is {error}</h1> :
          loader == true ? <h1>...Loading</h1> :
            user != null ? <h1>user is {user.uid}</h1>
              :
              <><input type="email" onChange={trackEmail} value={email} placeholder="email" ></input>
                <br></br>
                <input type="password" onChange={trackPassword} value={password} placeholder="password"
                ></input>
                <br></br>
                <button type="click" onClick={printDetails}
                >Login</button></>
      }

    </>
  )
}

export default Login