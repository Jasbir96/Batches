import React, { useState, useEffect } from "react";
import { auth, database } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [filePath, setFilePath] = useState("")
  async function signupHandler() {
    // alert(email + " " + password + " " + name)
    try {
      const userCreds = await auth
        .createUserWithEmailAndPassword(email, password);
      const userId = userCreds.user.uid;
      // database -> user collection and then create a doc with 
      // uid as key and it's data as value
      alert("user signed up");
      let docSnap = await database.users.doc(userId).set({
        name: name,
        email: email,
        createdAt: database.getCurrentTimeStamp()
      })
      console.log(docSnap.data())
      // alert("uid: ", userCreds.user.uid);
      // console.log(userCreds.user.uid);
      // alert("user created");
      // set user in the collection
    } catch (err) {
      alert(err.message);
    }
  }
  useEffect(function () {
    // get
    async function fn() {
      const docSnap = await database.users.doc("cQs3NYCarKcDWLWxOZK8PafFNEu2").get();
      let user = docSnap.data();
      console.log(user);
    }
    fn();
  }, [])
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
        // console.log(e.target.files)f
      }}></input>
      <br></br>
      <button onClick={signupHandler}>Signup</button>
    </>
  );
}

export default Signup;
