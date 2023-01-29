import React from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  type?: "primary" | "secondary";
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { href = "/", type = "secondary", children } = props;

  return (
    <a
      href={href}
      className={`pt-2 inline-block cursor-pointer pb-2 pl-4 pr-4 text-white rounded-md font-semibold transition-colors ${
        type == "primary"
          ? "bg-gradient-to-r from-purple-400 to-pink-600 text-opacity-100 hover:text-opacity-75"
          : "border-2 border-primary hover:text-primary"
      }`}
    >
      {children}
    </a>
  );
};

export default Button;
