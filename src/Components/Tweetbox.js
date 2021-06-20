import React, { useState, forwardRef } from "react";
import "../Style/Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./../Firebase";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayname: "tazy",
      username: "mostafaeltazy",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/249px-Video-Game-Controller-Icon-IDV-green.svg.png",
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/249px-Video-Game-Controller-Icon-IDV-green.svg.png" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
            placeholder="What is hapenning ?!"
          />
          <input
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
            className="tweetbox__img"
            type="text"
            placeholder="Enter Image URL "
          />
        </div>
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetbox__tweetbutton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default Tweetbox;
