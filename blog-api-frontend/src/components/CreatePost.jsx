import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [titleField, setTitleField] = useState("");
  const [textField, setTextField] = useState("");
  const user = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  const handleTitleChange = (event) => {
    setTitleField(event.target.value);
  };

  const handleTextChange = (event) => {
    setTextField(event.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3000/posts/new", {
        title: titleField,
        text: textField,
        user_id: user._id,
      })
      .then((response) => {
        const post = response.data;
        console.log(post);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <form
      action="http://localhost:3000/posts/new"
      method="POST"
      className="rounded-3xl shadow-md self-center mt-8 bg-gray-200 w-1/2 h-1/2 flex flex-col justify-center items-center gap-8"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center">Create New Post</h1>
        <div className="flex flex-col">
          <label for="title">Title:</label>
          <input
            name="title"
            id="title"
            type="text"
            minlength="4"
            onChange={handleTitleChange}
            required
          ></input>
        </div>
        <div className="flex flex-col">
          <label for="text">Text:</label>
          <textarea
            className="resize-none"
            name="text"
            id="text"
            minlength="4"
            onChange={handleTextChange}
            rows="5"
            cols="33"
            required
          ></textarea>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-white px-4 py-2 rounded-lg hover:shadow-md hover:cursor-pointer"
      >
        Create Post
      </button>
    </form>
  );
}

export default CreatePost;
