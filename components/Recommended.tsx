import React from "react";
import Link from "next/link";
import Button from "./Button";
import styles from "../styles/index.module.css";

interface pinnedScribbles {
  title: string;
  url: string;
  topic: string;
}

const Recommended: React.FC<{ pinnedScribbles: pinnedScribbles[] }> = ({
  pinnedScribbles,
}) => {
  return (
    <div>
      <h4 className="text-xl mt-16 font-medium">
        <h2 className={styles.heading}>
          First time here? You might like these 👇🏽
        </h2>
      </h4>
      <ul className="list-none mb-8">
        {pinnedScribbles.map((scribble, index) => (
          <li key={index} className="pl-0">
            <div>
              <Link href={scribble.url}>
                <span className="text-2xl hover:text-primary transition-colors ease font-semibold text-white">
                  📝 {scribble.title}
                </span>
              </Link>{" "}
              <div className="text-md pt-2 text-gray-400">
                {scribble.topic ? scribble.topic : "Blog"}
              </div>
            </div>
             
          </li>
        ))}
        <Button
          buttonText={`See All 22 Essays`}
          url="/writing"
          buttonType="secondary"
        />
      </ul>
       
    </div>
  );
};

export default Recommended;
