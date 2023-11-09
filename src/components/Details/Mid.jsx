import React from "react";

const Mid = ({ user }) => {
  return (
    <>
      <p className="pt-6 text-sm opacity-75 md:text-base">
        {user?.bio ?? "This profile has no bio"}
      </p>
      <div className="flex justify-between px-4 py-5 mt-6 md:px-8 bg-lightBG dark:bg-darkBG rounded-2xl">
        <div className="flex flex-col items-center">
          <span className="text-xs opacity-75 md:text-sm">Repos</span>
          <span className="text-xl font-bold">{user?.public_repos ?? "8"}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs opacity-75 md:text-sm">Followers</span>
          <span className="text-xl font-bold">{user?.followers ?? "3938"}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs opacity-75 md:text-sm">Following</span>
          <span className="text-xl font-bold">{user?.following ?? "9"}</span>
        </div>
      </div>
    </>
  );
};

export default Mid;
