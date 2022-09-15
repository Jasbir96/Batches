import React, { useState, useEffect } from 'react'
import { database } from "../firebase";
// import Comments from "./Comments";
function Feed() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fn() {
            console.log("hello");
            const snapShot = await database.posts.get();
            let listofPost = snapShot.docs.map(doc => doc.data());
            setPosts(listofPost);
        }
        fn();
    }, []);
    return (
        <>
            <div>Feed</div>
            {
                posts.map((post, idx) => {
                    return (
                        <div key={idx}>
                            <video src={post.postImgUrl}
                                // autoPlay={true} 
                                muted></video>
                            <div>{post.userName}</div>
                            <img src={post.userImg} style={{ height: "40px" }}></img>
                            {/* <Comments ></Comments> */}
                        </div>
                    )
                })
            }
        </>
    )
}
export default Feed;
