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
          className={`${styles.shortintro} pl-4 italic text-2xl font-bold border-l-4 pt-0 border-gray-600`}
        >
          Hello there, I'm Aswin! I manage a team of product designers and I
          write about a variety of topics like product design, people
          management, self introspection, productivity and more.
        </p>
        <p className={`${styles.shortintro} mt-4 pt-4 pb-4`}>
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
