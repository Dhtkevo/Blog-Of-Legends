import { Link } from "react-router-dom";

import { UpdateContext } from "../App";
import { useContext } from "react";

function Navbar({ user }) {
  const setUser = useContext(UpdateContext);

  function handleLogOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <div className="bg-white shadow-md flex items-center justify-between">
      <h2 className="font-medium text-3xl py-6 pl-8">
        <span className="hover:cursor-pointer">
          <Link to="/">Blog Of Legends</Link>
        </span>
      </h2>
      {user && <h2 className="font-bold text-3xl">Welcome {user.username}!</h2>}
      {!user ? (
        <div className="flex gap-4 pr-8 text-lg">
          <h4 className="hover:cursor-pointer hover:text-2xl">
            <Link to="/sign-in">Sign In</Link>
          </h4>
          <h4 className="hover:cursor-pointer hover:text-2xl">
            <Link to="/register">Register</Link>
          </h4>
        </div>
      ) : (
        <h4
          className="hover:cursor-pointer text-2xl pr-8"
          onClick={handleLogOut}
        >
          <Link to="/sign-in">Log out</Link>
        </h4>
      )}
    </div>
  );
}

export default Navbar;
