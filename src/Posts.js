import { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let fetchData = async function () {
      let res = await fetch("/api/posts");
      let json = await res.json();
      return setPosts(json.posts);
    };
    fetchData();
  }, []);

  let postItems = posts.map((post) => (
    <Post className="mb-5" key={post.id.toString()} post={post} />
  ));
  return <div className="p-5">{postItems}</div>;
}
