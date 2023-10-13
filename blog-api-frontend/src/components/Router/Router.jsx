import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../HomePage";
import PostPage from "../PostPage/PostPage";
import Register from "../Register";
import SignIn from "../SignIn";

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
        path: "/posts/:id",
        element: <PostPage />,
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
