import React, { useState, useEffect } from "react";
import "../Style/Feed.css";
import Tweetbox from "./Tweetbox";
import Post from "./Post";
import db from "./../Firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="Feed">
      <div className="Feed__header">
        <h2>Home</h2>
      </div>
      <Tweetbox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayname={post.displayname}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
