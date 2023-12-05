import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ page, link }) => {
  return (
    <>
      <div className="container flex flex-col mx-auto bg-white mt-3">
        <div className=" text-left hidden md:block">
          <nav aria-label="breadcrumb">
            <ol className="flex w-full flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60">
              <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-yellow-400 antialiased transition-colors duration-300 hover:text-yellow-500">
                <Link className="" to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 text-lg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                </Link>
                <span className="pointer-events-none mx-2 select-none font-sans text-2xl font-normal leading-normal antialiased">
                  /
                </span>
              </li>
              <li className="flex cursor-pointer items-center font-sans text-2xl font-normal leading-normal antialiased transition-colors duration-300 hover:text-yellow-500">
                <Link
                  className="font-bold transition-colors hover:text-yellow-500"
                  to={link}
                >
                  {page}
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
