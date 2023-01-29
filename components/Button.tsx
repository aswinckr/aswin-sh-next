import React from "react";
import Link from "next/link";
interface ButtonProps {
  href: string;
  type?: "primary" | "secondary";
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { href, type = "secondary", children } = props;

  console.log(children);
  return (
    <Link href={href}>
      <div
        className={`pt-2 inline-block cursor-pointer pb-2 pl-4 pr-4 text-white rounded-md font-semibold transition-colors ${
          type == "primary"
            ? "bg-primary"
            : "border-2 border-primary hover:text-primary"
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
