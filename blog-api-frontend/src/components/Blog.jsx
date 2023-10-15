import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import Navbar from "./Navbar";

function Blog() {
  const user = useContext(UserContext);

  return (
    <div className="bg-coalblack flex flex-col h-full min-h-fit">
      <Navbar user={user} />
      <Outlet user={user} />
    </div>
  );
}

export default Blog;
