import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerButton = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4000/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
  }
  return (
    <div className="appearance-none">
      <h1 className="text-center">Register your account</h1>
      <form onSubmit={registerButton} className="flex w-64 flex-col gap-4 rounded-md bg-gray-100 p-4 shadow-md">
        <input onChange={(e) => setUsername(e.target.value)}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Username"
        />
        <input onChange={(e) => setPassword(e.target.value)}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Password"
        />
        <button type="submit" className="rounded-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Register
        </button>
      </form>
    </div>
  );
}
