import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

function Banner() {
  const user = useContext(UserContext);

  return (
    <div className="flex flex-col gap-6 p-4 bg-gray-100 py-10 lg:py-20">
      <h2 className="text-4xl font-bold text-center">
        Explore a collection of knowledge
      </h2>
      <p className="text-lg text-center">
        Read and share ideas from independent voices, world-class publications,
        and experts from around the globe. Everyone's welcome.
      </p>
      {user && (
        <Link
          className=" text-center font-medium text-lg p-4 w-1/6 self-center rounded-xl bg-white shadow-sm hover:bg-fuchsia-300 hover:shadow-lg"
          to="/posts/new"
        >
          <button>Create Post</button>
        </Link>
      )}
    </div>
  );
}

export default Banner;
