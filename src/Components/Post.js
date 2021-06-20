import React, { forwardRef } from "react";
import "../Style/Post.css";
import { Avatar, Button } from "@material-ui/core";
import Icon from "../Components/Icons";

const Post = forwardRef(
  ({ displayname, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headertext">
              <h3>
                {displayname}
                <span className="post__headerspecial">
                  {verified && (
                    <Icon.VerifiedUserIcon className="post__badge" />
                  )}
                  @{username}
                </span>
              </h3>
            </div>
            <div className="post__headerdiscription">
              <p> {text}</p>
            </div>
          </div>
          {image.length > 0 && <img src={image} height="250px" width="400px" />}
          <div className="post__footer">
            <Icon.ChatBubbleOutlineIcon />
            <Icon.RepeatIcon />
            <Icon.FavoriteBorderIcon />
            <Icon.PublishIcon />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
