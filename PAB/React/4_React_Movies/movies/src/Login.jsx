import react, { useState } from "react";
import './App.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = ()=> {
    alert(email+ password);
  }
  const handleEmailInput = (e)=> {
    // console.log(email);
    setEmail(e.target.value)
  }
  return (
    <>
      <h1>Firebase Login</h1>
      <input type="email" value={email}
        onChange={handleEmailInput}></input>
      <input type="password"
        value={password} onChange={(e) => {
          setPassword(e.target.value)
        }}
      ></input>
      <input type="button" value="submit" onClick={handleSubmit}></input>

    </>
  );
}

export default Login;
