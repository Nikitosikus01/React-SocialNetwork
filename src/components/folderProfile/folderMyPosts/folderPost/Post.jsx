import React from "react";
import post from "./Post.module.css"


const Post = (props) =>{

return (
  <div>
    <div>
      <img
        className={post.AvaPost}
        src="https://bipbap.ru/wp-content/uploads/2021/07/9-1.jpeg"
      ></img>
      post 1
      <button> likes:</button>
      <span>{props.like} </span>
      <button> dislike:</button>
      <span>{props.dislike} </span>
    </div>
  </div>
);



}


export default Post;
