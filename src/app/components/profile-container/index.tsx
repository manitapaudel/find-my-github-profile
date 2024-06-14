"use client";
import { useEffect, useState } from "react";

const ProfileContainer = () => {
  const [userName, setUserName] = useState("manitapaudel");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    console.log("We're submitting, finally!");
  };

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

  if (loading) {
    return <h1>Loading data...</h1>;
  }

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
        onSubmit={handleSubmit}
        className="bg-green-500 hover:bg-green-600 text-white h-12 px-6 rounded-r-md"
      >
        Submit
      </button>
      <div className="mt-5">
        Here&apos;s the GitHub details that you searched for:
      </div>
    </div>
  );
};

export default ProfileContainer;
