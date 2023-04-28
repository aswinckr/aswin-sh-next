import React from "react";
import Avatar from "./Avatar";
import styles from "../styles/index.module.css";

// font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600

const IntroShort = () => {
  return (
    <div className="mb-24 flex flex-col md:flex-row">
      <Avatar className="" />
      <div className="md:pl-8 flex-1 mt-16">
        <p
          className={`${styles.shortintro} font-inter font-semibold text-4xl mb-2 leading-tight`}
        >
          Hey there, i’m Aswin
        </p>
        <h2 className={styles.heading}>Here's what i'm up to -</h2>
        <p className={`${styles.shortintro} pb-4`}>
          <span className="mr-2">🎭</span>Developing social & soft skills
          through writing and improv, and sharing my ideas to make the world a
          little more fun.
        </p>
        <p className={`${styles.shortintro} pb-4`}>
          <span className="mr-2">🌍</span>Moved to Berlin and learning to speak
          German one day at a time using an audiobook
        </p>
        <p className={`${styles.shortintro} pb-4`}>
          <span className="mr-2">💅🏼</span>Manage a team of product designers for
          a popular food delivery platform
        </p>
      </div>
    </div>
  );
};

export default IntroShort;
