import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../public/logo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  const toggleOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className="container mx-auto mb-8">
      <nav className="flex items-center justify-between flex-wrap pt-4 pb-2 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link href="/">
            <Image src={logo} alt="logo" className="w-36 opacity-80" />
          </Link>
          {/* <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg> */}
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleOpen()}
            className="flex items-center px-3 py-2 border rounded border-gray-300 dark:border-gray-800 hover:border-gray-500 "
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block lg:flex lg:items-center lg:w-auto">
          <div className="text-md">
            <Link href="/">
              <span
                className={`${isOpen ? `block` : `hidden`} ${
                  router.pathname == "/" ? "active" : ""
                } block mt-4 lg:inline-block lg:mt-0 mr-4`}
              >
                Start Here
              </span>
            </Link>
            <Link href="/writing">
              <span
                className={`${
                  isOpen ? `block` : `hidden`
                } block mt-4 lg:inline-block lg:mt-0 mr-4`}
              >
                Writing
              </span>
            </Link>
            <Link href="/ideas">
              <span
                className={`${
                  isOpen ? `block` : `hidden`
                } block mt-4 lg:inline-block lg:mt-0 mr-4`}
              >
                Ideas
              </span>
            </Link>
          </div>
          {/* <div>
            <a
              href="#"
              className={`${
                isOpen ? `inline-block` : `hidden`
              } lg:inline-block mt-4 text-sm px-4 py-2 text-gray-500 leading-none border rounded border-gray-800 dark:border-gray-800mt-4 lg:mt-0`}
            >
              🚧 Join my mailing list
            </a>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
