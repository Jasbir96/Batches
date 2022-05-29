import React, { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import "./profile.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
function Profile() {
  let cUser = useContext(AuthContext);
  const [user, setUser] = useState();
  const [pageLoading, setpageLoading] = useState(true);
  useEffect(function fn() {
    (async () => {
      // let docRef = db.collection("users").doc(cUser.uid);
      console.log(cUser);
      let docRef = doc(db, "users", cUser.uid);
      let dataObject = await getDoc(docRef);
      console.log(dataObject.data());
      setUser(dataObject.data());
      // console.log(dataPromise.data());
      setpageLoading(false);
    })();
  }, []);
  return (
    <>
      {pageLoading == true ?
        <div>Loading</div> :
        <>
          <div className="header"></div>
          <div className="main">
            <div className="pimg_container">
              <img src="http://via.placeholder.com/640x360" alt=""
                className="pimg" />
            </div>
            <div className="details">
              <div className="content">Jasbir  </div>
              <div className="content">No of Posts: <span
                className="bold_text"
              >Posts</span></div>
              <div className="content"
              >Email <span
                className="bold_text">Email.com</span></div>
            </div>
          </div>
        </>

      }
    </>
  )
}
export default Profile