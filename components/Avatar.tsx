import React from "react";
import Image from "next/image";
import profilePic from "../public/profile-pic.jpg";
const Avatar = () => {
  return (
    <div
      className="w-64 mb-2 lg:mb-8 mt-16 lg:mt-24 shadow-xl mx-auto"
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
