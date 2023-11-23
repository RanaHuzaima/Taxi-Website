import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto">
        <footer className="relative p-4 bg-white md:px-6 md:py-8">
          <div className="md:flex md:justify-between flex text-center md:flex-row flex-col justify-center items-center">
            <a href="" className="flex items-center mb-4 sm:mb-0">
              <img
                className="lg:h-20 h-16 cursor-pointer"
                src="https://umrah-taxi.com/assets/umrah-taxi1-1c57b6fa08daec5a400f7ce309cda26cff87f87955037c4c0aa0643e031b9a92.png"
              />
            </a>
            <ul className="flex md:flex-row flex-col  items-center mb-6 sm:mb-0 md:gap-4 gap-6 text-black">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `font-bold hover:text-yellow-400 border p-2 rounded-lg ${
                      isActive ? "text-yellow-400" : ""
                    }`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `font-bold  hover:text-yellow-400 border p-2 rounded-lg ${
                      isActive ? "text-yellow-400" : ""
                    }`
                  }
                  to="/pricing"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `font-bold  hover:text-yellow-400 border p-2 rounded-lg ${
                      isActive ? "text-yellow-400" : ""
                    }`
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `font-bold  hover:text-yellow-400 border p-2 rounded-lg ${
                      isActive ? "text-yellow-400" : ""
                    }`
                  }
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
            © 2023{" "}
            <Link to="/" className="hover:underline cursor-pointer">
              UMRAH TAXI™
            </Link>
            . All Rights Reserved.
          </span>
        </footer>
      </div>
    </>
  );
};

export default Footer;
