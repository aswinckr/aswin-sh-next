import React from "react";
import Avatar from "./Avatar";
import styles from "../styles/index.module.css";

// font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600

const IntroShort = () => {
  return (
    <div className="mb-24">
      <Avatar />
      <div>
        <p
          className={`${styles.shortintro} font-laBelleAurore pl-4 italic text-5xl text-center font-bold mb-16 leading-tight`}
        >
          Hey there, i’m Aswin. <br />i write about design and self-awareness.
        </p>
        <h2 className={styles.heading}>About me in 5sec or less</h2>
        <p className={`${styles.shortintro} pb-4`}>
          <span className="mr-4"> ⭐️</span>I live now in Berlin, Germany.
        </p>
        <p className={styles.shortintro}>
          <span className="mr-4"> ⭐️</span>I work full time at{" "}
          <a href="https://www.notion.so">Delivery Hero</a>. I used to work at{" "}
          <a href="https://www.notion.so">Grab</a> in Singapore before.
        </p>
        <p className={`${styles.shortintro} pt-4`}>
          <span className="mr-4"> ⭐️</span>
          I'm currently curious about social extroverts and becoming a great
          communicator. I practice this through improv storytelling.
        </p>
      </div>
    </div>
  );
};

export default IntroShort;
