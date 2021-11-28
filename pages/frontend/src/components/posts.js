import React, { useEffect, useState } from "react";

const Posts = () => {
  const [media, setMedia] = useState();

  const getMedia = async () => {
    try {
      const init = {
        mode: 'no-cors', 
        method: 'GET'
      }
      console.log("Fetching")
      const res = await fetch("http://127.0.0.1:8787/posts");
      console.log("Fetch Complete")
      const ans = await res.json()
      console.log(ans.posts)
      setMedia(ans.posts);
      ans.posts.map((post) =>
        console.log(post)
      )
    } catch (err) {}
  };

  useEffect(() => {
    getMedia();
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      {media && media.map((post) => (
        <div key={ Math.random().toString(36).substr(2, 9) }>
          <h2>Title: {JSON.parse(post).title}</h2>
          <h3>Username: {JSON.parse(post).username}</h3>
          <p>{JSON.parse(post).content}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;