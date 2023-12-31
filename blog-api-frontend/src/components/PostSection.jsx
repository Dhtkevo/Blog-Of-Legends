import PostCard from "./PostCard";
import { useState, useEffect } from "react";

function PostSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="overflow-auto py-10 bg-navblack flex-1 flex justify-center items-center lg:justify-start lg:px-8 lg:flex-wrap lg:gap-4">
      {posts.map((post) => {
        return (
          <PostCard
            title={post.title}
            user_id={post.user_id}
            createdAt={post.createdAt}
            id={post._id}
            key={post._id}
          />
        );
      })}
    </div>
  );
}

export default PostSection;
