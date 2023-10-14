import CommentCard from "./CommentCard";
import { Link, useMatch } from "react-router-dom";
import { useEffect, useState } from "react";

function PostPage() {
  const [currentPost, setCurrentPost] = useState([]);
  const [comments, setComments] = useState([]);

  const match = useMatch("/posts/:postid");

  const postid = match.params.postid;

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${postid}`)
      .then((response) => response.json())
      .then((post) => setCurrentPost(post));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/comments`)
      .then((response) => response.json())
      .then((comments) => setComments(comments));
  }, []);

  return (
    <div className="h-full flex flex-col p-12 items-center gap-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-6xl font-bold text-center">{currentPost.title}</h1>
        <p className="text-lg shadow-sm bg-gray-100">{currentPost.text} </p>
      </div>
      <Link
        to={`/posts/${postid}/new`}
        className=" text-center font-medium text-lg p-4 w-1/6 self-center rounded-xl bg-gray-200 shadow-sm hover:bg-fuchsia-300 hover:shadow-lg"
      >
        <button>Leave Comment</button>
      </Link>
      <h5 className="font-semibold underline">Comments </h5>
      <div className="h-full w-full flex flex-col items-center gap-2">
        {comments.map(
          (comment) =>
            comment.post_id === postid && (
              <CommentCard
                text={comment.text}
                author_name={comment.author_name}
                key={comment._id}
              />
            )
        )}
      </div>
    </div>
  );
}

export default PostPage;
