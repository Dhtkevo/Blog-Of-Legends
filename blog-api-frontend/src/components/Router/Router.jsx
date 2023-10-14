import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../HomePage";
import PostPage from "../PostPage/PostPage";
import Register from "../Register";
import SignIn from "../SignIn";
import CreatePost from "../CreatePost";
import CreateComment from "../CreateComment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts/new",
        element: <CreatePost />,
      },
      {
        path: "/posts/:id",
        element: <PostPage />,
      },
      {
        path: "/posts/:id/new",
        element: <CreateComment />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
