import React from "react";
import UserProfile from "./Components/Userprofile";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-6">User Profile</h1>

      <UserProfile />
    </div>
  );
};

export default App;
