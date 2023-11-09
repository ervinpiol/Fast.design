import React from "react";

import Top from "./Details/Top";
import Mid from "./Details/Mid";
import Bottom from "./Details/Bottom";
import Avatar from "../assets/avatar.svg";

const Details = ({ user }) => {
  return (
    <div className="p-6 mt-5 bg-white md:p-12 dark:bg-lightBlue rounded-2xl">
      <div className="relative flex flex-col items-start w-full md:gap-10 md:flex-row">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 md:w-28 md:h-28">
            <img
              src={user?.avatar_url ?? Avatar}
              alt="Avatar"
              className="w-full rounded-full"
            />
          </div>
          <Top user={user} isSmallScreen />
        </div>
        <div className="w-full">
          <Top user={user} />
          <Mid user={user} />
          <Bottom user={user} />
        </div>
      </div>
    </div>
  );
};

export default Details;
