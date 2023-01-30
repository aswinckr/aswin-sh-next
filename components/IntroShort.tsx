import React from "react";
import Avatar from "./Avatar";

// font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600

const IntroShort = () => {
  return (
    <div className="">
      <Avatar />
      <div>
        <p className="pt-4 text-lg italic opacity-90 leading-loose text-white">
          Aswin is a product designer living in Berlin. He’s on a journey to
          finding his{" "}
          <a href={`https://perell.com/note/build-a-personal-monopoly/`}>
            personal monopoly.
          </a>{" "}
          You can do it too - I recommend checking out{" "}
          <a href="https://writeofpassage.school/"> write of passage</a> or{" "}
          <a href="https://www.ship30for30.com/">ship30</a>. This website is my
          little online home for where my ideas live. You might find some of
          them interesting! If you do, leave a comment, or reach out. I’m always
          happy to <a href="/contact">make a new friend!</a>
        </p>
      </div>
    </div>
  );
};

export default IntroShort;
