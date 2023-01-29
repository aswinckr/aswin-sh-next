import React from "react";
import Link from "next/link";
import styles from "../styles/index.module.css";

const ButtonTags = () => {
  const [selected, setSelected] = React.useState("one");

  return (
    <div className={styles.tags}>
      <div className={`${selected === "one" ? styles.selected : ""}`}>
        <input
          type="radio"
          id="one"
          name="react-tips"
          value="one"
          checked={selected === "one"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label htmlFor="one">One</label>
      </div>
      <div className={`${selected === "two" ? styles.selected : ""}`}>
        <input
          type="radio"
          id="two"
          name="react-tips"
          value="two"
          checked={selected === "two"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label htmlFor="two">Two</label>
      </div>
      <div className={`${selected === "three" ? styles.selected : ""}`}>
        <input
          type="radio"
          id="three"
          name="react-tips"
          value="three"
          checked={selected === "three"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label htmlFor="three">Three</label>
      </div>
    </div>
  );
};

export default ButtonTags;
