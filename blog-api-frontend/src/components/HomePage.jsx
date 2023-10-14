import Banner from "./Banner";
import PostSection from "./PostSection";

function HomePage() {
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
