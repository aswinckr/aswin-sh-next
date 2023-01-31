import React from "react";
import Avatar from "./Avatar";

// font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600

const IntroShort = () => {
  return (
    <div className="">
      <Avatar />
      <div>
        <p className="pt-4 text-lg italic opacity-90 leading-loose text-white">
          Hey there, I'm Aswin!✨, a design manager and an aspiring writer
          living in Berlin. I'm on a journey to finding my{" "}
          <a href={`https://perell.com/note/build-a-personal-monopoly/`}>
            personal monopoly
          </a>{" "}
          through writing. You can do it too - recommend checking out{" "}
          <a href="https://writeofpassage.school/"> write of passage</a> or{" "}
          <a href="https://www.ship30for30.com/">ship30</a>. This website is my
          little online home for my ideas. Take a look around, you may find some
          of them interesting. If you do, leave a comment, or reach out
          directly, I'm always happy to chat or{" "}
          <a href="/contact">make a new friend!</a>
        </p>
      </div>
    </div>
  );
};

export default IntroShort;
