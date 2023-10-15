import CommentCard from "./CommentCard";
import { Link, useMatch } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

function PostPage() {
  const [currentPost, setCurrentPost] = useState([]);
  const [comments, setComments] = useState([]);

  const user = useContext(UserContext);

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
    <div className="h-full flex flex-col p-12 items-center gap-8 overflow-auto">
      <div className="flex flex-col gap-6">
        <h1 className="text-6xl font-bold text-center text-lightishgreen">
          {currentPost.title}
        </h1>
        <p className="text-xl shadow-sm bg-navblack rounded-lg p-2 text-textsilver">
          {currentPost.text}{" "}
        </p>
      </div>
      {user && (
        <Link
          to={`/posts/${postid}/new`}
          className=" text-center font-medium text-lg p-4 w-1/6 self-center rounded-xl bg-darkishgreen text-textsilver hover:bg-lightishgreen shadow-sm hover:bg-fuchsia-300 hover:shadow-lg"
        >
          <button>Leave Comment</button>
        </Link>
      )}
      <h5 className="font-semibold underline text-textsilver text-xl">
        Comments{" "}
      </h5>
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
