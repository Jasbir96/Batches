import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { database, storage } from '../firebase';
function UploadVideo(props) {
    const [filePath, setFilePath] = useState("")
    function uploadVideoHandler() {
        try {
            // unique -> uuid4 -> unique id 
            const postId = uuidv4();
            const uploadtask =
                storage.ref(`/posts/${postId}`).put(filePath);
            uploadtask.on("state_changed",
                progressCb,
                errorCb,
                successCb)
            function progressCb(snapShot) {
                var progress = (
                    snapShot.bytesTransferred /
                    snapShot.totalBytes) * 100;
                console.log("Progress: ", progress, "%");
            }
            function errorCb(err) {
                console.log(err.message);
                console.log(err.payload);
            }
            async function successCb() {
                // image upload -> complete
                // img url
                const imgUrl = await
                    uploadtask.snapshot.ref.getDownloadURL()
                // firebaseReducer -> home -> upload Video
                const userResp = await
                    database.users.doc(props.userId).get()
                const userDoc = userResp.data();
                // profileImageLink
                // name
                let postObj = {
                    userName: userDoc.name,
                    userImg: userDoc.profileImageLink,
                    postImgUrl: imgUrl,
                    likes: [],
                    comments: [],
                    createdAt: database.getCurrentTimeStamp()
                }
                await database.posts.doc(postId).set(postObj);
                console.log("Post created");


            }
        } catch (err) {
            console.log(err.message)
        }


    }
    return (
        <div>
            <input type="File" onChange={(e) => {
                setFilePath(e.target.files[0]);
                console.log(e.target.files)
            }}></input>
            <button onClick={uploadVideoHandler}>upload</button>

        </div>
    )
}

export default UploadVideo