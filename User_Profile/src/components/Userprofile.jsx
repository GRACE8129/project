import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProfileCard from "./Profile-card";
const UserProfile = () => {
  const [user, setUser] = useState([]);
  // state to hold user data

  const [loading, setLoading] = useState(true);
  // state to manage loading state

  const [error, setError] = useState(null);
  // state to manage error state

  const [search, setSearch] = useState("");
  // search query
  const [filterCity, setFilterCity] = useState("");
  // selected city filter

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Filter users based on search and city
  const filteredUsers = user.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase());
    const matchesCity = filterCity ? user.address.city === filterCity : true;
    return matchesSearch && matchesCity;
  });

  // Get unique cities for dropdown
  const cities = [...new Set(user.map((u) => u.address.city))];

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      {/* Search + Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/2"
        />
        <select
          value={filterCity}
          onChange={(e) => setFilterCity(e.target.value)}
          className="border p-2 rounded w-full sm:w-1/4"
        >
          <option value="">All Cities</option>
          {cities.map((city, idx) => (
            <option key={idx} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <ProfileCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
