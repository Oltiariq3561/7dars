import React, { useState } from "react";
import useLoginStore from "../store/useLoginStore";

function Login() {
  const [username, setUsername] = useState("");
  const { user, login, logout } = useLoginStore();

  function handleLogin(e) {
    e.preventDefault();
    if (username.trim()) {
      login(username);
      setUsername("");
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-96 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">🔒 Login</h1>
        {user ? (
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Welcome, <span className="text-blue-600">{user.username}</span>
            </h2>
            <button
              onClick={logout}
              className="w-full bg-red-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="text"
              placeholder="Enter username"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
