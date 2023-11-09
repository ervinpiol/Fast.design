import React from "react";

import IconLocation from "../../assets/icon-location.svg";
import IconTwitter from "../../assets/icon-twitter.svg";
import IconWebsite from "../../assets/icon-website.svg";
import IconCompany from "../../assets/icon-company.svg";

const Bottom = ({ user }) => (
  <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
    <ProfileField
      icon={IconLocation}
      value={user?.location ?? "San Francisco"}
    />

    <ProfileField
      icon={IconTwitter}
      value={user?.twitter_username ?? "Not available"}
    />

    <ProfileField
      icon={IconWebsite}
      value={user?.html_url ?? "https://github.blog"}
      isLink
    />

    <ProfileField
      icon={IconCompany}
      value={`@${user?.twitter_username ?? "github"}`}
    />
  </div>
);

const ProfileField = ({ icon, value, isLink }) => (
  <div className="flex items-center w-full gap-5 text-sm md:text-base">
    <img src={icon} alt="icon" />
    {isLink ? (
      <a href={value} target="_blank" className="w-full break-words">
        {value}
      </a>
    ) : (
      <p className="w-full break-words">{value}</p>
    )}
  </div>
);

export default Bottom;
