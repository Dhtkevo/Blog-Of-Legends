import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import ErrorBox from "./ErrorBox";

function CreatePost() {
  const [titleField, setTitleField] = useState("");
  const [textField, setTextField] = useState("");
  const user = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("Error creating post");
  const [validPost, setValidPost] = useState(true);

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

    if (titleField.length < 5) {
      setValidPost(false);
      setErrorMessage("Title must be atleast 5 characters!");
      return;
    } else if (textField.length < 5) {
      setValidPost(false);
      setErrorMessage("Post must have atleast 5 chracters!");
      return;
    }

    axios
      .post("http://localhost:3000/posts/new", {
        title: titleField,
        text: textField,
        user_id: user._id,
      })
      .then((response) => {
        const post = response.data;
        setValidPost(true);
        navigate("/");
      })
      .catch((error) => {
        setValidPost(false);
        console.log(error);
      });
  }

  return (
    <form
      action="http://localhost:3000/posts/new"
      method="POST"
      className="overflow-auto rounded-3xl shadow-md self-center mt-8 bg-navblack w-1/2 h-2/3 flex flex-col justify-center items-center gap-8"
    >
      <div className="flex flex-col gap-4 py-10">
        {!validPost && <ErrorBox message={errorMessage} />}
        <h1 className="text-lightishgreen text-4xl font-bold text-center">
          Create New Post
        </h1>
        <div className="text-textsilver text-xl flex flex-col">
          <label htmlFor="title">Title:</label>
          <input
            name="title"
            id="title"
            type="text"
            minLength="4"
            className="bg-coalblack p-2"
            onChange={handleTitleChange}
            required
          ></input>
        </div>
        <div className="text-textsilver text-xl flex flex-col">
          <label htmlFor="text">Text:</label>
          <textarea
            className="resize-none bg-coalblack p-2"
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
        className="text-textsilver bg-darkishgreen hover:bg-lightishgreen bg-white px-4 py-2 rounded-lg hover:shadow-md hover:cursor-pointer"
      >
        Create Post
      </button>
    </form>
  );
}

export default CreatePost;
