import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white shadow-md flex items-center justify-between">
      <h2 className="font-medium text-3xl py-6 pl-8">
        <span className="hover:cursor-pointer">
          <Link to="/">Blog Of Legends</Link>
        </span>
      </h2>
      <div className="flex gap-4 pr-8 text-lg">
        <h4 className="hover:cursor-pointer hover:text-2xl">
          <Link to="/sign-in">Sign-In</Link>
        </h4>
        <h4 className="hover:cursor-pointer hover:text-2xl">
          <Link to="/sign-up">Register</Link>
        </h4>
      </div>
    </div>
  );
}

export default Navbar;
