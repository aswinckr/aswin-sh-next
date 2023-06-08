import React from "react";
import Avatar from "./Avatar";
import styles from "../styles/index.module.css";
import Link from "next/link";

// font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600

const IntroShort = () => {
  return (
    <div className="mb-24 flex flex-col md:flex-row">
      {/* <Avatar className="" /> */}
      <div className=" flex-1 mt-16">
        <p
          className={`${styles.shortintro} font-inter font-semibold text-4xl mb-2 leading-tight text-gray-200`}
        >
          Lessons from Autopilot
        </p>
        {/* <h2 className={styles.heading}>Here's what i'm up to -</h2> */}
        <p className={`${styles.shortintro} pb-4 text-gray-400`}>
          Lessons from Autopilot is <a href="#">Aswin's</a> journey to achieving
          goals and acquiring different skills. He shares his experiences using{" "}
          <Link href="/0fb6e74e-32fe-4edc-a847-b5e36a8af369">Autopilot</Link>, a
          framework to build habits that compound over time.
        </p>
      </div>
    </div>
  );
};

export default IntroShort;
