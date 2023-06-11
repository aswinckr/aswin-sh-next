import React from "react";
import styles from "../styles/index.module.css";

interface IntroShortProps {
  ideas: number;
}

const IntroShort = (props: IntroShortProps) => {
  const ideaCount = props.ideas;
  return (
    <div className="mb-24 flex flex-col md:flex-row">
      {/* <Avatar className="" /> */}
      <div className=" flex-1 mt-16">
        <p
          className={`${styles.shortintro} font-inter font-semibold text-4xl mb-2 leading-tight text-gray-200`}
        >
          {ideaCount} Ideas that shape my life
        </p>
        {/* <h2 className={styles.heading}>Here's what i'm up to -</h2> */}
        <p className={`${styles.shortintro} pb-4 text-gray-400`}>
          This page is a collection of ideas from books, conversations and
          inspiring people that help me become a better person each day. Check
          out the <a href="/writing">writing</a> section for detailed writing
          based on these ideas or you can just browse through these{" "}
          <a href="/ideas">ideas</a>.
        </p>
      </div>
    </div>
  );
};

export default IntroShort;
