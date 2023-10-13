function Register() {
  return (
    <form
      action="http://localhost:3000/users/register"
      method="POST"
      className="rounded-3xl shadow-md self-center mt-8 bg-gray-200 w-1/2 h-1/2 flex flex-col justify-center items-center gap-8"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center">Register</h1>
        <div className="flex flex-col">
          <label for="username">Username:</label>
          <input
            name="username"
            id="username"
            type="text"
            minlength="8"
            required
          ></input>
        </div>
        <div className="flex flex-col">
          <label for="password">Password (Min 8 characters):</label>
          <input
            name="password"
            id="password"
            type="text"
            minlength="8"
            required
          ></input>
        </div>
      </div>
      <button className="bg-white px-4 py-2 rounded-lg hover:shadow-md hover:cursor-pointer">
        Sign Up
      </button>
    </form>
  );
}

export default Register;
