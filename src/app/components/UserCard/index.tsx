import Image from "next/image";

const UserCard = ({
  loading,
  userData,
}: {
  loading: boolean;
  userData: any;
}) => {
  console.log(userData);
  if (loading) {
    return <h1>Loading data...</h1>;
  }
  return (
    <div className="border border-1 border-gray-700 rounded-md p-10">
      <div className="flex flex-col items-start gap-2">
        <img
          alt={`${userData.name}'s avatar`}
          src={userData.avatar_url}
          width={250}
          height={250}
          className="mx-auto rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="font-medium text-xl">{userData.name}</h1>
          <p className="text-gray-500">@{userData.login}</p>
        </div>
        <button className=" text-center text-white bg-green-400 hover:bg-green-300 p-2 w-full rounded-md my-2">
          Follow
        </button>
        <p>{userData.bio}</p>
        <section className="flex gap-2">
          <p>
            <span className="font-medium">{userData.followers}</span> followers
          </p>
          &bull;
          <p>
            <span className="font-medium">{userData.following}</span> following
          </p>
        </section>
        <p>{userData.company && userData.company}</p>
        <p>{userData.location && userData.location}</p>
      </div>
    </div>
  );
};

export default UserCard;
