import Banner from "./Banner";
import PostSection from "./PostSection";
import Navbar from "./Navbar";
import { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

function HomePage() {
  const user = useContext(UserContext);

  return (
    <>
      <div className="flex flex-col gap-20">
        <Banner />
        <PostSection />
      </div>
    </>
  );
}

export default HomePage;
