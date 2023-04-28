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
          <span className="mr-2">🎭</span>Buiding social & soft skills through
          writing and{" "}
          <a
            href="https://www.youtube.com/watch?v=M-NtvvnKmrw&ab_channel=WhoseLineIsItAnyway%3F"
            target="_blank"
          >
            improv
          </a>
          , and sharing them here to make the world a bit more fun.
        </p>
        <p className={`${styles.shortintro} pb-4`}>
          <span className="mr-2">🌍</span>Moved to Berlin and learning German,
          one day at a time, using{" "}
          <a
            href="https://www.pimsleur.com/the-pimsleur-method"
            target="_blank"
          >
            an audiobook
          </a>{" "}
        </p>
        <p className={`${styles.shortintro} pb-4`}>
          <span className="mr-2">💅🏼</span>Manage a team of product designers for{" "}
          <a href="https://linkedin.com/in/aswinckr" target="_blank">
            a food delivery app
          </a>
        </p>
      </div>
    </div>
  );
};

export default IntroShort;
