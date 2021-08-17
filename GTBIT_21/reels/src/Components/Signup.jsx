import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from "../Context/AuthProvider";
import { database, storage } from "../firebaseAuthPOC/firebase";
function Signup(props) {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const [fullName, setfullName] = useState('');
    let [loginLoader, setLoginLoader] = useState(false);
    let [error, setError] = useState("");
    const [file, setFile] = useState(null);
    let { genericSignup, currentUser } = useContext(AuthContext);
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleName = (e) => {
        setfullName(e.target.value);
    }
    const handleUpload = (e) => {
        // dom 
        let file = e?.target?.files[0];
        if (file != null)
            setFile(file);

    }
    useEffect(() => {
        if (currentUser) {
            // send to feed page
            // loggedIN 
            props.history.push('/feed');
        }
    });
    const handleSignup = async () => {
        try {
            setError("");
            setLoginLoader(true);
            //    1. signup 
            let userCredential = await genericSignup(email, password);
            let uid = userCredential.user.uid;
            // uid 
            console.log("user signedUp with uid ", uid);
            // // 
            // // user folder -> uid name file store
            const uploadListener = storage.ref("/users/" + uid).put(file);
            uploadListener.on("state_changed", onprogress, onerror, onsucess);
            function onprogress(snapshot) {
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes)
                    * 100;
                console.log(progress);
            }
            function onerror(err) {
                console.log(err);
            }
            async function onsucess() {
                // /url 
                let downloadUrl = await uploadListener.snapshot.ref.getDownloadURL();
                console.log(downloadUrl);
                // user details add firestore
                database.users.doc(uid).set({
                    email: email,
                    fullName: fullName,
                    profileUrl: downloadUrl,
                    reels: [],
                    // activity feed 
                    likes: [],
                    comments: []
                    ,
                    uid: uid
                })
                //user details firestore
            }
        } catch (err) {
        }

    }
    // usage
    return (
        <div>
            <div>

                <input type="email"
                    value={email}
                    onChange={handleEmail}
                />
            </div>
            <div>
                <input type="password"
                    value={password}
                    onChange={handlePassword}
                />
            </div>
            <div>
                <input type="text"
                    value={fullName}
                    onChange={handleName}
                />
            </div>
            <div>
                <input type="file"
                    accept="image/*"
                    onChange={handleUpload}
                />
            </div>
            <div>
                <input type="button" onClick={handleSignup} value="SIGNUP">

                </input>
            </div>
        </div>
    )
}

export default Signup
