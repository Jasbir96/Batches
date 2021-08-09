import React, { useState, useContext } from 'react';
import { AuthContext } from "../Context/AuthProvider";
import { storage, database } from "../firebaseAuthPOC/firebase";
function Signup() {
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
        // console.log(file)
    }
    const handleSignup = () => {
        try {
            setError("");
            setLoginLoader(true);
            //    1. signup 
            let userCredential = await genericSignup(email, password);
            let uid = userCredential.user.uid;
            // uid 
            console.log(uid);
            // 
            // user folder -> uid name file store
            const uploadListener = storage.ref("/users/" + uid).put(file);
            uploadListener.on("state_changed", onprogress, onerror, onsucess);
            function onprogress(snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(progress)
            }
            function onerror(err) {
                console.log(err);
            }
            async function onsucess() {
                // /url 
                let downloadUrl = await uploadListener.snapshot.ref.getDownloadURL();
                //3 . user create firestore 
                database.users.doc(uid).set({
                    email: email,
                    userId: uid,
                    fullName: fullName,
                    profileUrl: downloadUrl
                })
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
                <input type="button" >
                    SIGNUP
                </input>
            </div>


        </div>
    )
}

export default Signup
