import React, { useState } from 'react'

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const trackEmail = function (e) {
    setEmail(e.target.value);
  }
  const trackPassword = function (e) {
    setPassword(e.target.value);
  }
  const printDetails = function () {
    alert(email + " " + password);
  }
  return (
    <>
      <input type="email" onChange={trackEmail}  value={email} placeholder="email" ></input>
      <br></br>
      <input type="password" onChange={trackPassword} value={password}  placeholder="password"
      ></input>
      <br></br>
      <button type="click" onClick={ printDetails}
      >Login</button>
    </>
  )
}

export default Login