import React from "react";
import Avatar from "./Avatar";

// font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600

const IntroShort = () => {
  return (
    <div className="">
      <Avatar />
      <div>
        <p className="pt-4 text-lg italic opacity-90 leading-loose text-white">
          Aswin is a design manager and an aspiring writer who is on a journey
          to find his personal niche he likes to write about. This website is
          his little home for his experiments, <a href="/writing">ideas</a> and{" "}
          <a href="/projects">projects</a>. Currently Aswin lives in Berlin,
          Germany and works for Delivery Hero in Berlin, Germany. Have a look
          around, leave some comments, and{" "}
          <a href="#">🚧 join my mailing list</a> to get notified when I post
          something new.
        </p>
      </div>
    </div>
  );
};

export default IntroShort;
