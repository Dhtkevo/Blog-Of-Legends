import { Link } from "react-router-dom";

function PostCard({ title, createdAt, id }) {
  return (
    <div className="h-80 w-80 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-24">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-4xl font-bold">Anonymous</h2>
        <h6 className="text-xl font-medium">{title}</h6>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h6 className="text-lg">{createdAt}</h6>
        <Link to={`/posts/${id}`}>
          <button className="hover:cursor-pointer hover:shadow-md hover:bg-gray-200 bg-gray-100 py-1 px-14 rounded-lg">
            View Post
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
