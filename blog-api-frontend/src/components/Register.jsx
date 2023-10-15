import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsernameField(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordField(event.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3000/users/register", {
        username: usernameField,
        password: passwordField,
      })
      .then((response) => {
        const user = response.data;
        localStorage.setItem("user", JSON.stringify(user));
        if (user) {
          navigate("/sign-in");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <form
      action="http://localhost:3000/users/register"
      method="POST"
      className="bg-navblack rounded-3xl shadow-md self-center mt-8 bg-gray-200 w-1/2 h-1/2 flex flex-col justify-center items-center gap-8"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-lightishgreen text-4xl font-bold text-center">
          Register
        </h1>
        <div className="flex flex-col">
          <label htmlFor="username">Username:</label>
          <input
            name="username"
            id="username"
            type="text"
            minLength="8"
            className="bg-coalblack text-textsilver p-2"
            onChange={handleUsernameChange}
            required
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password (Min 8 characters):</label>
          <input
            name="password"
            id="password"
            type="password"
            minLength="8"
            className="bg-coalblack text-textsilver p-2"
            onChange={handlePasswordChange}
            required
          ></input>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-darkishgreen text-textsilver px-4 py-2 rounded-lg hover:shadow-md hover:cursor-pointer"
      >
        Sign Up
      </button>
    </form>
  );
}

export default Register;
