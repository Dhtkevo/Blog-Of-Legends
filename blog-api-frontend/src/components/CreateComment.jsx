import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";

function CreateComment() {
  const [textField, setTextField] = useState("");
  const [post, setPost] = useState(null);
  let user = useContext(UserContext);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then(function (response) {
        const post = response.data;
        setPost(post);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleTextChange = (event) => {
    setTextField(event.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3000/comments/new", {
        author_name: user.username,
        text: textField,
        post_id: post._id,
      })
      .then((response) => {
        const comment = response.data;
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      {user && (
        <form
          action="http://localhost:3000/comments/new"
          method="POST"
          className="bg-navblack rounded-3xl shadow-md self-center mt-8 bg-gray-200 w-1/2 h-1/2 flex flex-col justify-center items-center gap-8"
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-lightishgreen text-4xl font-bold text-center">
              Create New Comment
            </h1>
            <div className="flex flex-col">
              <label htmlFor="text">Text:</label>
              <textarea
                className="resize-none bg-coalblack p-2 text-textsilver"
                name="text"
                id="text"
                minLength="4"
                onChange={handleTextChange}
                rows="5"
                cols="33"
                required
              ></textarea>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-darkishgreen text-textsilver px-4 py-2 rounded-lg hover:shadow-md hover:cursor-pointer"
          >
            Create Comment
          </button>
        </form>
      )}
    </>
  );
}

export default CreateComment;
