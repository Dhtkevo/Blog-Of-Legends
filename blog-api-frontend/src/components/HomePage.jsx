import Banner from "./Banner";
import PostSection from "./PostSection";

function HomePage() {
  return (
    <>
      <div className="flex flex-col ">
        <Banner />
        <PostSection />
      </div>
    </>
  );
}

export default HomePage;
