import React, { useState } from "react";
import UserProfile from "./components/Userprofile";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "dark min-h-screen bg-gray-900 text-white"
          : "min-h-screen bg-gray-100 text-gray-900"
      }
    >
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">User Profile</h1>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* User Profile Directory */}
      <UserProfile />
    </div>
  );
};

export default App;
