import axios from "axios";
import { useContext, useState } from "react";
import {
  redirect,
  redirectDocument,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Navbar from "./Navbar";
import { UpdateContext } from "../App";

function SignIn() {
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const navigate = useNavigate();

  const setUser = useContext(UpdateContext);

  const handleUsernameChange = (event) => {
    setUsernameField(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordField(event.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3000/users/login", {
        username: usernameField,
        password: passwordField,
      })
      .then((response) => {
        const user = response.data;
        console.log(user);
        // localStorage.setItem("jwt", users.auth_token);
        localStorage.setItem("user", JSON.stringify(user));
        // console.log("users", users); // undefined
        if (user) {
          setUser(user);
          console.log("SET USER RAN");
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <form
        action="http://localhost:3000/users/login"
        method="POST"
        className="rounded-3xl shadow-md self-center mt-8 bg-gray-200 w-1/2 h-1/2 flex flex-col justify-center items-center gap-8"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-center">Log In</h1>
          <div className="flex flex-col">
            <label for="username">Username:</label>
            <input
              name="username"
              id="username"
              type="text"
              minlength="8"
              onChange={handleUsernameChange}
              required
            ></input>
          </div>
          <div className="flex flex-col">
            <label for="password">Password:</label>
            <input
              name="password"
              id="password"
              type="text"
              minlength="8"
              onChange={handlePasswordChange}
              required
            ></input>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-white px-4 py-2 rounded-lg hover:shadow-md hover:cursor-pointer"
        >
          Sign In
        </button>
      </form>
    </>
  );
}

export default SignIn;
