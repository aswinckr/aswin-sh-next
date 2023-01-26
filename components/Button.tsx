import React from "react";
import Link from "next/link";
interface ButtonProps {
  buttonText: string;
  url: string;
  buttonType?: "primary" | "secondary";
}

const Button = (props: ButtonProps) => {
  const { buttonText, url, buttonType = "primary" } = props;
  return (
    <Link href={url}>
      <div
        className={`pt-2 inline-block cursor-pointer pb-2 pl-4 pr-4 text-white rounded-md font-semibold transition-colors ${
          buttonType == "primary"
            ? "bg-primary"
            : "border-2 border-primary hover:text-primary"
        }`}
      >
        {buttonText}
      </div>
    </Link>
  );
};

export default Button;
