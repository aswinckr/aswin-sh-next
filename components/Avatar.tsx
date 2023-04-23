import React from "react";
import Image from "next/image";
import profilePic from "../public/profile-pic.jpg";
const Avatar = ({ className }) => {
  return (
    <div
      className={`w-64 mt-12 shadow-xl mx-auto ${className}`}
      style={{ height: "24rem" }}
    >
      <Image
        src={profilePic}
        alt="Picture of the author"
        className="rounded-md object-contain h-128"
      />
    </div>
  );
};

export default Avatar;
