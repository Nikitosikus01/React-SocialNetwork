import React from "react";
import Prof from "./Profile.module.css"


const Profile = () =>{

return (
  <div className={Prof.profile}>
    <div>
      <img
        className="ImgSky"
        src="https://klike.net/uploads/posts/2019-03/1551772531_1.jpg"
      ></img>
    </div>
    <div>ava + description</div>
    <div>
      My posts <div>New post</div>
    </div>

    <div>post 1</div>
    <div>post 2</div>
  </div>
);



}


export default Profile;
