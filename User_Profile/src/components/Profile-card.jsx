import React, { useState } from "react";

const ProfileCard = ({ user }) => {
  // user is an object containing user details (props)
  const [showDetails, setShowDetails] = useState(false);
  // state to toggle the visibility of user details

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        {user.name}
      </h2>

      <p className="text-gray-600 dark:text-gray-300">{user.email}</p>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        {user.company.name} - {user.address.city}
      </p>

      {/* Extra Details */}
      {showDetails && (
        <div className="mt-4 text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 transition"
      >
        {showDetails ? "Hide Details" : "View More"}
      </button>
    </div>
  );
};

export default ProfileCard;
