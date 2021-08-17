import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import firebase, { database, storage } from "../firebaseAuthPOC/firebase";
import uuid from 'react-uuid';
function Feed() {
    let { currentUser } = useContext(AuthContext);
    // null-> firestore user 
    let [user, setUser] = useState(null);
    // console.log(currentUser);
    useEffect(async () => {
        // /firestore 
        // context -> uid -> firestore get user on the basis 
        let user = await database.users.doc(currentUser.uid).get()
        console.log("in feed ", user.data());
        setUser(user.data());
    }, []);
    return (
        <div>
            <Header user={user}></Header>
            <Upload user={user} uid={currentUser.uid}></Upload>
            <Reels></Reels>
        </div>
    )
}
function Header(props) {
    let { user } = props;

    return (
        <div style={{
            height: "5vh",
            border: "2px solid",
            boxShadow: "10px 5px 5px gray",
            textAlign: "center",
        }}>
            <span>{user?.fullName}</span>
            <img style={
                {
                    height: "4vh", borderRadius: "50%",
                    border: "1px solid gray"
                }
            }
                src={user?.profileUrl} alt="" />
        </div >
    )
}
// export const LineItem = item => <li key={uuid()}>{item}</li>
function Upload(props) {
    const handleUpload = async (e) => {
        let file = e?.target?.files[0];
        if (file != null)
            try {
                let ruid = uuid();
                console.log(ruid);
                // // 
                // // 1.reel folder -> uid name file store
                const uploadListener = storage.ref("/reels/" + ruid).put(file);
                uploadListener.on("state_changed", onprogress, onerror, onsucess);
                function onprogress(snapshot) {
                    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(progress);
                }
                function onerror(err) {
                    console.log(err);
                }
                async function onsucess() {
                    // /url 
                    let downloadUrl = await uploadListener.snapshot.ref.getDownloadURL();
                    console.log("video uploaded with link", downloadUrl);
                    // user details add firestore
                    //    2 -> firestore store
                    let { user, uid } = props;
                    // 3 -> firestore reels collection-> set reel
                    database.reels.doc(ruid).set({
                        videoUrl: downloadUrl,
                        authorName: user.fullName,
                        authourDPicUrl: user.profileUrl,
                        likes: [],
                        comments: [],
                        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                        ruid: ruid
                    });
                    console.log("reel added firestore ")
                    // 4. author -> reels array -> ruid add (profile page ) 
                    let updatedReelsIds = [...user.reels, ruid]
                    database.users.doc(uid).update({
                        reels: updatedReelsIds,
                    })
                    console.log("ruid added our author")
                }
            } catch (err) {
            }
    }
    return (
        <div>
            <div>
                <input type="file"
                    accept="video/*"
                    onChange={handleUpload}
                />
            </div>
        </div>
    )
}
function Reels() {
    let [reels, setReels] = useState([]);
    const handleMuted = function (e) {
        e.target.muted = !e.target.muted;
    }
    useEffect(async () => {
        let entries = await database.reels.orderBy("createdAt", "desc").get();
        console.log(entries)
        let arr = [];
        entries.forEach((entry) => {
            let newentry = entry.data();
            arr.push(newentry);
        })
        console.log("reels", arr)
        setReels(arr);
    }, [])
    return (
        <div>
            <div className="reels"
                style={{
                    height: "90vh",
                    boxShadow: "10px 5px 5px gray",
                    overflow: "auto"
                }}
            >
                {
                    reels.map(function (videoObject, idx) {
                        return (
                            <div className="video-container" style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                                key={idx}
                            >
                                <video style={{
                                    height: "80vh",
                                    marginBottom: "3rem"
                                }}
                                    src={videoObject.videoUrl}
                                    autoPlay={true}
                                    muted={true}
                                    controls={false}
                                    onClick={handleMuted}
                                ></video>
                                {/* comment */}
                                {/* like */}
                                {console.log(videoObject.createdAt, idx)}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Feed;


