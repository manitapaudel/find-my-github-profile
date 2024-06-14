import { useState } from "react";

const Input = () => {
  const [userName, setUserName] = useState("");

  return (
    <input
      type="text"
      placeholder="Enter the username here..."
      className="border border-1 border-gray-700 h-12 px-4 py-2 rounded-l-md"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
    />
  );
};

export default Input;
