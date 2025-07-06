import { useState } from "react";
import { Link } from "react-router";

function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("User Register: ", name, email, password);
  };

  return (
    <div className="container mx-auto">
      <div className="w-full flex justify-center items-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border border-gray-300 shadow-md"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Login</h2>
          </div>
          <p className="text-center mb-6">Enter your username and password</p>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 ">Name</label>
            <input
              type="text"
              value={name as string}
              onChange={({ target }) => setName(target.value)}
              className="w-full p-2 border rounded border-gray-300 focus:outline-none "
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 ">Email</label>
            <input
              type="email"
              value={email as string}
              onChange={({ target }) => setEmail(target.value)}
              className="w-full p-2 border rounded border-gray-300 focus:outline-none "
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 ">
              Password
            </label>
            <input
              type="password"
              value={password as string}
              onChange={({ target }) => setPassword(target.value)}
              className="w-full p-2 border rounded border-gray-300 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full bg-black text-white p-2  font-semibold hover:bg-black transition">
            Sign Up
          </button>
          <p className="mt-6 text-center text-sm">
            Have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Register;
