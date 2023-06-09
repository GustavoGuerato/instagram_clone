import React from "react";
import "./post.css";
import { Avatar } from "@mui/material";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post_avatar"
          alt="Torix"
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>

      {/*header->avatar+ username*/}
      <img className="post_image" src={imageUrl} alt="" />
      {/*image*/}

      {/* username + caption */}
      <h4 className="post_text">
        <strong>{username} </strong>
        {caption}
      </h4>
    </div>
  );
}

export default Post;
