import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import CallBtn from "./CallBtn";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => {
    setIsOpen(false);
    setMenuOpen(!menuOpen);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="container flex flex-col mx-auto">
        <div className="relative flex flex-wrap  items-center justify-between mb-3 w-full group pt-3 shrink-0">
          <div>
            <img
              className="lg:h-20 h-16 cursor-pointer"
              src="https://umrah-taxi.com/assets/umrah-taxi1-1c57b6fa08daec5a400f7ce309cda26cff87f87955037c4c0aa0643e031b9a92.png"
            />
          </div>
          <div className="items-center justify-between hidden sm:text-sm gap-12 text-black md:flex">
            {/* Add your NavLink components here */}
            <NavLink
              className={({ isActive }) =>
                `lg:text-2xl  font-semibold  hover:text-yellow-400 ${
                  isActive ? "text-yellow-400 border p-2 rounded-lg" : ""
                }`
              }
              onClick={closeDropdown}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `lg:text-2xl font-semibold  hover:text-yellow-400 ${
                  isActive ? "text-yellow-400 border p-2 rounded-lg" : ""
                }`
              }
              onClick={closeDropdown}
              to="/Book"
            >
              Book
            </NavLink>
            <div className="relative">
              <a
                className="lg:text-2xl font-semibold  hover:text-yellow-400 flex items-center cursor-pointer"
                type="button"
                onClick={toggleDropdown}
              >
                Packages
              </a>

              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdown"
                className={`z-10 ${
                  isOpen ? "block" : "hidden"
                } bg-white divide-y divide-gray-100 border rounded-lg shadow w-44 absolute`}
              >
                <ul
                  className="py-2 text-sm text-black "
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <NavLink
                      to="/camry-car-packages"
                      onClick={closeDropdown}
                      className={({ isActive }) =>
                        `block px-4 py-2 font-bold hover:text-yellow-400 hover:bg-gray-100 ${
                          isActive
                            ? "text-yellow-400 border p-2 rounded-lg m-2"
                            : ""
                        }`
                      }
                    >
                      Camry Car
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/gmc-car-packages"
                      onClick={closeDropdown}
                      className={({ isActive }) =>
                        `block px-4 py-2 font-bold hover:text-yellow-400 hover:bg-gray-100 ${
                          isActive
                            ? "text-yellow-400 border p-2 rounded-lg m-2"
                            : ""
                        }`
                      }
                    >
                      GMC Car
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/hyundai-staria-packages"
                      onClick={closeDropdown}
                      className={({ isActive }) =>
                        `block px-4 py-2 font-bold hover:text-yellow-400 hover:bg-gray-100 ${
                          isActive
                            ? "text-yellow-400 border p-2 rounded-lg m-2"
                            : ""
                        }`
                      }
                    >
                      Hyundai Staria
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/toyota-hiace-packages"
                      onClick={closeDropdown}
                      className={({ isActive }) =>
                        `block px-4 py-2 font-bold hover:text-yellow-400 hover:bg-gray-100 ${
                          isActive
                            ? "text-yellow-400 border p-2 rounded-lg m-2"
                            : ""
                        }`
                      }
                    >
                      Toyota HiAce
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/h1-hyundai-packages"
                      onClick={closeDropdown}
                      className={({ isActive }) =>
                        `block px-4 py-2 font-bold hover:text-yellow-400 hover:bg-gray-100 ${
                          isActive
                            ? "text-yellow-400 border p-2 rounded-lg m-2"
                            : ""
                        }`
                      }
                    >
                      H1 Hyundai Car
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Innova-car-packages"
                      onClick={closeDropdown}
                      className={({ isActive }) =>
                        `block px-4 py-2 font-bold hover:text-yellow-400 hover:bg-gray-100 ${
                          isActive
                            ? "text-yellow-400 border p-2 rounded-lg m-2"
                            : ""
                        }`
                      }
                    >
                      Innova Car
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <NavLink
              className={({ isActive }) =>
                `lg:text-2xl font-semibold  hover:text-yellow-400 ${
                  isActive ? "text-yellow-400 border p-2 rounded-lg" : ""
                }`
              }
              onClick={closeDropdown}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `lg:text-2xl font-semibold  hover:text-yellow-400 ${
                  isActive ? "text-yellow-400 border p-2 rounded-lg" : ""
                }`
              }
              onClick={closeDropdown}
              to="/contact"
            >
              Contact Us
            </NavLink>
          </div>
          <div className="items-center hidden gap-8 md:flex">
            <CallBtn py="py-3" px="px-3" />
          </div>
          <button onClick={handleButtonClick} className="flex md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z"
                fill="black"
              ></path>
            </svg>
          </button>
          <div
            className={` flex md:hidden transition-all duration-300 ease-in-out flex-col shadow-main text-center justify-center mt-4 w-full gap-3 overflow-hidden bg-white max-h-0 ${
              menuOpen ? "py-4 px-4 rounded-2xl max-h-64" : ""
            } top-full border `}
          >
            {/* Add your NavLink components here */}
            <NavLink
              className={({ isActive }) =>
                `font-bold  hover:text-yellow-400 border rounded-lg ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold  hover:text-yellow-400 border rounded-lg ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
              to="/Book"
            >
              Book
            </NavLink>
            <div>
              <a
                className="text-black font-bold  hover:text-yellow-400 flex items-center cursor-pointer border rounded-lg justify-center"
                type="button"
                onClick={toggleDropdown}
              >
                Packages
              </a>

              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdown"
                className={`z-10 ${
                  isOpen ? "block" : "hidden"
                } bg-white divide-y divide-gray-100 border rounded-lg  shadow w-44 absolute`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 "
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <NavLink
                      to="/camry-car-packages"
                      onClick={closeDropdown}
                      className={({ isActive }) =>
                        `block px-4 py-2 font-bold hover:text-yellow-400 hover:bg-gray-100 ${
                          isActive
                            ? "text-yellow-400 border p-2 rounded-lg m-2"
                            : ""
                        }`
                      }
                    >
                      Camry Car
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/gmc-car-packages"
                      onClick={closeDropdown}
                      className={({ isActive }) =>
                        `block px-4 py-2 font-bold hover:text-yellow-400 hover:bg-gray-100 ${
                          isActive
                            ? "text-yellow-400 border p-2 rounded-lg m-2"
                            : ""
                        }`
                      }
                    >
                      GMC Car
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/hyundai-staria-packages"
                      onClick={closeDropdown}
                      className={({ isActive }) =>
                        `block px-4 py-2 font-bold hover:text-yellow-400 hover:bg-gray-100 ${
                          isActive
                            ? "text-yellow-400 border p-2 rounded-lg m-2"
                            : ""
                        }`
                      }
                    >
                      Hyundai Staria
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/toyota-hiace-packages"
                      onClick={closeDropdown}
                      className={({ isActive }) =>
                        `block px-4 py-2 font-bold hover:text-yellow-400 hover:bg-gray-100 ${
                          isActive
                            ? "text-yellow-400 border p-2 rounded-lg m-2"
                            : ""
                        }`
                      }
                    >
                      Toyota HiAce
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/h1-hyundai-packages"
                      onClick={closeDropdown}
                      className={({ isActive }) =>
                        `block px-4 py-2 font-bold hover:text-yellow-400 hover:bg-gray-100 ${
                          isActive
                            ? "text-yellow-400 border p-2 rounded-lg m-2"
                            : ""
                        }`
                      }
                    >
                      H1 Hyundai Car
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Innova-car-packages"
                      onClick={closeDropdown}
                      className={({ isActive }) =>
                        `block px-4 py-2 font-bold hover:text-yellow-400 hover:bg-gray-100 ${
                          isActive
                            ? "text-yellow-400 border p-2 rounded-lg m-2"
                            : ""
                        }`
                      }
                    >
                      Innova Car
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <NavLink
              className={({ isActive }) =>
                `font-bold  hover:text-yellow-400 border rounded-lg ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold  hover:text-yellow-400 border rounded-lg ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
              to="/contact"
            >
              Contact Us
            </NavLink>
            <Button btnText="Contact Us" btnLink="/contact" py="py-1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
