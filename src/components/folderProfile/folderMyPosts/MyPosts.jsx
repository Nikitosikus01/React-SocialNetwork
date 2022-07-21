import React from "react";
import Post from "./folderPost/Post";
// import MyPosts from "./MyPosts.module.css"


const MyPosts = () =>{

return (
  <div>
    <div>My posts:</div>
    <div>New post</div>

    <Post like='14'/>
    <Post like='7'/>
    <Post like='1' dislike='4'/>
  </div>
);



}


export default MyPosts;
