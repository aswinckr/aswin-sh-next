import React from "react";

import Image from "next/image";

const Footer = () => {
  return (
    <div className={"container max-w-screen-lg mx-auto mt-24 mb-12"}>
      <div className="w-80 mx-auto text-center ">
        <a
          href="https://twitter.com/aswinckr"
          target={"_blank"}
          className="text-gray-500 hover:text-primary transition-colors ease-in"
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com/in/aswinckr"
          target={"_blank"}
          className="pl-4 text-gray-500 hover:text-primary transition-colors ease-in"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/aswinckr"
          target={"_blank"}
          className="pl-4 pr-4 text-gray-500 hover:text-primary transition-colors ease-in"
        >
          Github
        </a>
        <a
          href="# "
          className="text-gray-500 hover:text-primary transition-colors ease-in"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Footer;
