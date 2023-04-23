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
          className={`${styles.shortintro} font-inter text-4xl mb-2 leading-tight`}
        >
          Hey there, i’m Aswin
        </p>
        <h2 className={styles.heading}>Here's my quick intro:</h2>
        <p className={`${styles.shortintro} pb-4`}>
          <span className="mr-2">✨</span>Creating experiences through words and
          code
        </p>
        <p className={`${styles.shortintro} pb-4`}>
          <span className="mr-2">🎭</span>Amateur improv student
        </p>
        <p className={`${styles.shortintro} pb-4`}>
          <span className="mr-2">🌍</span>Currently live and work in Berlin,
          Germany
        </p>
      </div>
    </div>
  );
};

export default IntroShort;
