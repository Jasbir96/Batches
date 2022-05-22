import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

import "./profile.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
function Profile() {
  let cUser = useContext(AuthContext);
  // console.log(user);
  let [loading, setLoading] = useState("");
  useEffect((function fn() {
    (async function () {
      if(cUser){
        const docRef = doc(db, "user", cUser.uid);
        const docSnap = await getDoc(docRef);
        console.log("Document data:", docSnap.data());
      }
      // if (docSnap.exists()) {
      // }
    })()
  })(), [cUser]);

  return (
    <>
      {cUser == null ? <div>Need to login</div> :
        <div>logged in user is {cUser.uid}</div>

        // loading == true ? <div>getting data</div> :
        //   <>
        //     <div className="header"></div>
        //     <div className="main">
        //       <div className="pimg_container">

        //         <img src="http://via.placeholder.com/640x360" alt=""
        //           className="pimg" />
        //       </div>
        //       <div className="details">
        //         <div className="content">Jasbir  </div>
        //         <div className="content">No of Posts: <span
        //           className="bold_text"
        //         >Posts</span></div>
        //         <div className="content"

        //         >Email <span
        //           className="bold_text">Email.com</span></div>


        //       </div>
        //     </div>
        //   </>

      }
    </>

  )
}

export default Profile