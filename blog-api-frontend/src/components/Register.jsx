function Register() {
    return (
            <form className="self-center mt-8 bg-gray-200 border-red-500 border-2  w-1/2 h-1/2 flex justify-center items-center">
                <div>
                    <label>Username:
                        <input type="text" minlength="8" required></input>
                    </label>
                    <label>Password (Min 8 characters):
                        <input type="text" minlength="8" required></input>
                    </label>
                </div>
                <button>Sign Up </button>
            </form>
    )
}

export default Register;