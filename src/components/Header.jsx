import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Users" },
    { path: "/post", label: "Post" },
    { path: "/paginate", label: "Paginate" },
    { path: "/counter", label: "Counter" },
    { path: "/todo", label: "Todo" },
    { path: "/modal", label: "Modal" },
    { path: "/login", label: "Login" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg py-3 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-white text-2xl font-bold tracking-wide">My App</h1>
        <ul className="flex space-x-4">
          {navLinks.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`px-5 py-2 rounded-full text-white font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-blue-600 shadow-md scale-105"
                    : "bg-gray-700 hover:bg-gray-600 active:scale-95"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
