import React from "react";
import Avatar from "./Avatar";

const IntroShort = () => {
  return (
    <div className="">
      <Avatar />
      <div>
        <p className="pt-4 text-xl leading-loose text-white opacity-100">
          I'm a Product Designer & Writer with a keen interest in human
          behaviour. This website is my little online home for my writing and
          experiments with code. I mostly write about{" "}
          <a href="#" target="_blank" className="_textlink">
            Design
          </a>
          ,{" "}
          <a href="#" target="_blank" className="_textlink">
            Psychology
          </a>{" "}
          or{" "}
          <a href="#" target="_blank" className="_textlink">
            Storytelling
          </a>
          . Currently I'm a Design Manager focused on User Retention at Delivery
          Hero in Berlin, Germany.
        </p>
      </div>
    </div>
  );
};

export default IntroShort;
