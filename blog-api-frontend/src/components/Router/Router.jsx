import {createBrowserRouter} from "react-router-dom";
import App from "../../App";
import HomePage from "../HomePage";
import PostPage from "../PostPage/PostPage";
import Register from "../Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
              path: "/",
              element: <HomePage />,
            },
        ],
    },
    {
        path: "/posts/:id",
        element: <App />,
        children: [
            {
              path: "/posts/:id",
              element: <PostPage />,
            },
        ],
    },
    {
        path: "/sign-up",
        element: <App />,
        children: [
            {
              path: "/sign-up",
              element: <Register />,
            },
        ],
    },
]);

export default router;