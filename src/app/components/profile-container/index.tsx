"use client";
import { useEffect, useState } from "react";
import UserCard from "../user-card";

const ProfileContainer = () => {
  const [userName, setUserName] = useState("sarojbelbase");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUsersData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    if (data) {
      setUserData(data);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGithubUsersData();
  }, []);

  const handleSubmit = () => {
    fetchGithubUsersData();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the username here..."
        className="border border-1 border-gray-700 h-12 px-4 py-2 rounded-l-md"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 hover:bg-green-600 text-white h-12 px-6 rounded-r-md"
      >
        Submit
      </button>
      <div className="mt-5">
        <UserCard loading={loading} userData={userData} />
      </div>
    </div>
  );
};

export default ProfileContainer;
