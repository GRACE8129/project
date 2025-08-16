import React from "react";
import { useState } from "react";

const ProfileCard = ({ user }) => {
  //user is an object containing user details(props)
  const [showDetails, setShowDetails] = useState(false);
  //state to toggle the visibility of user details

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-500">
        {user.company.name} - {user.address.city}
      </p>

      {showDetails && (
        <div className="mt-4 text-sm text-gray-700 space-y-1">
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}

      <button
        onClick={() => setShowDetails(!showDetails)}
        //toggle the visibility of user details
        className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
      >
        {showDetails ? "Hide Details" : "View More"}
      </button>
    </div>
  );
};

export default ProfileCard;
