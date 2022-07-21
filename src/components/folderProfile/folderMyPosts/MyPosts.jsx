import React from "react";
import Post from "./folderPost/Post";
// import MyPosts from "./MyPosts.module.css"


const MyPosts = () =>{

return (
  <div>
    <div>My posts:</div>
    <div>New post</div>

    <Post/>
    <Post/>
    <Post/>
  </div>
);



}


export default MyPosts;
