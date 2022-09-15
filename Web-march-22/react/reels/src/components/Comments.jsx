import React, { useState } from 'react';

function Comments() {
    const [comments, setComments] = useState([]);
    const [value, setVal] = useState("");
    // user -> comment -> 
    // postId, userName, userProfileImage,
    //     desc
    // posts collection -> commentId-> set posts
    return (
        <>
            <h3>Comments</h3>
            <input type="text"
                onChange={(e) => { setVal(e.target.value) }}
            ></input>
            <ul>
                {
                    comments.map((comment, idx) => {
                        return (
                            <div key={idx}>
                                <h4>{comment.userName}</h4>
                                <img src={comment.userImg}
                                    style={{ height: "40px" }}
                                ></img>
                                <div>{comment.desc}</div>
                            </div>

                        )
                    })
                }
            </ul>

        </>
    )
}

export default Comments