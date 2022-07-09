import React from 'react';
import "./feed.css";

function Feed() {
  return (
    <>
      <div className="header">
        <img src="
        https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png
        " alt="" className="insta_img" />
        <img src="https://media-exp1.licdn.com/dms/image/C5103AQHYIpz6Of4vqg/profile-displayphoto-shrink_100_100/0/1574668417312?e=1658966400&v=beta&t=SG1-vr3krQXLee6KV73OstspCdanLvmAmzcGclXRkl0"
          alt=""
          className="profile_img" />
      </div>
      <div className="main_continer">
        <div className="upload_container">
          <i 
            className="movie_icon fa-solid fa-clapperboard"
          ></i>
          <div className="upload_text">UPLOAD</div>
        </div>
        <div className="reels_container">Reels</div>
      </div>
    </>
  )
}
export default Feed;