import React from "react";
import "./post.css";
import { Avatar } from "@mui/material";

function Post() {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar
          className="post_avatar"
          alt="Torix"
          src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>
      </div>

      {/*header->avatar+ username*/}
      <img
        className="post_image"
        src="https://freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
        alt=""
      />
      {/*image*/}

      {/* username + caption */}
      <h4 className="post_text">
        <strong>Torix</strong> UAU QUE BAGULHO FODA
      </h4>
    </div>
  );
}

export default Post;
