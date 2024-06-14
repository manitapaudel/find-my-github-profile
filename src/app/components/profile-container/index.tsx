const ProfileContainer = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the username here..."
        className="border border-1 border-gray-700 h-12 px-4 py-2 rounded-l-md"
      />
      <button className="bg-green-500 text-white h-12 px-6 rounded-r-md">
        Submit
      </button>
      <div className="mt-5">
        Here&apos;s the GitHub details that you searched for:
      </div>
    </div>
  );
};

export default ProfileContainer;
