import React from "react";

const Top = ({ user, isSmallScreen }) => {
  const userCreatedAt = user && user.created_at;
  const isValidDate =
    userCreatedAt && !isNaN(new Date(userCreatedAt).getTime());

  const dateFormatOptions = {
    month: "short",
    year: "numeric",
    day: "numeric",
  };

  const formattedJoinDate = isValidDate
    ? new Date(userCreatedAt).toLocaleDateString("en-US", dateFormatOptions)
    : "Jan 25, 2011";

  return (
    <div
      className={`flex flex-col justify-between md:flex-row ${
        isSmallScreen ? "md:hidden" : "hidden md:flex"
      }`}
    >
      <div>
        <h1 className="text-xl font-bold md:text-3xl">
          {user?.name ?? "The Octocat"}
        </h1>
        <span className="text-sm md:text-base text-bluePrimary ">
          @{user?.login ?? "octocat"}
        </span>
      </div>
      <p className="text-sm md:text-base pt-1.5">Joined {formattedJoinDate}</p>
    </div>
  );
};

export default Top;
