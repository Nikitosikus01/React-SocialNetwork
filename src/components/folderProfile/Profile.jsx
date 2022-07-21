import React from "react";
import Prof from "./Profile.module.css"
import Avatar from "./folderAvatar/Avatar"
import Description from "./folderDescription/Description"
import MyPosts from "./folderMyPosts/MyPosts";
import BGImg from "./folderBGImg/BGImg";

const Profile = () =>{

return (
  <div className={Prof.profile}>
    <BGImg />
    <Avatar />
    <Description />
    <MyPosts />
  </div>
);



}


export default Profile;
