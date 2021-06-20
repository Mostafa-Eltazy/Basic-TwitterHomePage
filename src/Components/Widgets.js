import React from "react";
import "../Style/Widgets.css";
import Icon from "../Components/Icons";
import {
  TwitterTweetEmbed,
  TwitterTimeLineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Icon.SearchIcon className="widgets__searchicon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetcontainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetID={"858551177860055040"} />
        <TwitterShareButton />
      </div>
    </div>
  );
}

export default Widgets;
