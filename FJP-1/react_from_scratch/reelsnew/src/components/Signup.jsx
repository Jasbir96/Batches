import React, { useState } from 'react'
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword }
    from "firebase/auth";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
function Signup() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [name, setName] = useState("");
    let [loader, setLoader] = useState(false);
    let [error, setError] = useState("");
    let [user, setUser] = useState("");
    async function processSignup() {
        try {
            setLoader(true);
            let userCred = await
                createUserWithEmailAndPassword(auth, email, password)
            // console.log(userCred.user);
            // firestore andar user create krunga
            await setDoc(doc(db, "users", userCred.user.uid), {
                email,
                name,
                reelsIds: [],
                profileImgUrl: "",
                userId: userCred.user.uid
            });

            // await addDoc(collection(db, "users"), {
            //     // "email":email,
            //     email,
            //     name,
            //     reelsIds: [],
            //     profileImgUrl: "",
            //     userId: userCred.user.uid
            // });
            setUser(userCred.user);
        } catch (err) {
            console.log(err);
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
            {error != "" ? <h1>Error is {error}</h1> :
                loader == true ? <h1>...Loading</h1> :
                    user != "" ?
                        <>
                            <h1>signed up user is  {user.uid}</h1>
                        </> :
                        <>
                            <input type="email" onChange={(e) => {
                                setEmail(e.target.value)
                            }} value={email} placeholder="email" ></input>
                            <br></br>
                            <input type="password" onChange={(e) => { setPassword(e.target.value) }
                            } value={password} placeholder="password"
                            ></input>
                            <br></br>
                            <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} placeholder="Full Name"
                            ></input>
                            <br></br>
                            <button type="click" onClick={processSignup}
                            >Signup</button>
                        </>
            }
        </>

    )
}

export default Signup;


