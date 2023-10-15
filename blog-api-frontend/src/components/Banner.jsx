import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

function Banner() {
  const user = useContext(UserContext);

  return (
    <div className="bg-coalblack flex flex-col gap-6 p-4 bg-gray-100 py-10 lg:py-20">
      <h2 className="text-lightishgreen text-4xl font-bold text-center">
        Explore a collection of knowledge
      </h2>
      <p className="text-textsilver text-lg text-center">
        Read and share ideas from independent voices, world-class publications,
        and experts from around the globe. Everyone's welcome.
      </p>
      {user && (
        <Link
          className=" text-center font-medium text-lg p-4 w-1/6 self-center rounded-xl bg-darkishgreen text-textsilver shadow-sm hover:bg-lightishgreen hover:shadow-lg"
          to="/posts/new"
        >
          <button>Create A Post</button>
        </Link>
      )}
    </div>
  );
}

export default Banner;
