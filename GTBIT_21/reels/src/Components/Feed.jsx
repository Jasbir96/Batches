import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { database } from "../firebaseAuthPOC/firebase"
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
            <Upload></Upload>
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
            <img
                style={
                    {
                        height: "4vh", borderRadius: "50%",
                        border: "1px solid gray"
                    }
                }

                src={user?.profileUrl} alt="" />
        </div >

    )
}
function Upload() {
    return (
        <div>Upload
        </div>
    )
}
function Reels() {
    return (
        <div>
            Reels
        </div>
    )
}
export default Feed;


