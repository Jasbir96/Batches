import React,{useState} from 'react'
import "./profile.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
function Profile() {
  let cUser = useContext(AuthContext);
  // console.log(user);
  let [loading, setLoading] = useState("");

  return (
    <>
      {cUser == null ? <div>Need to login</div> :
        <div>logged in user is {cocUser.uid}</div>

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