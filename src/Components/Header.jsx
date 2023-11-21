import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="p-3  navbar-light">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-black text-decoration-none"
            >
              <img
                src="https://umrah-taxi.com/assets/umrah-taxi1-1c57b6fa08daec5a400f7ce309cda26cff87f87955037c4c0aa0643e031b9a92.png"
                alt=""
                width="100"
                height="50"
              />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink to="/" className="nav-link px-2 text-black">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className="nav-link px-2 text-black">
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" className="nav-link px-2 text-black">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/Contact" className="nav-link px-2 text-black">
                  Conatct
                </NavLink>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-white"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-warning ">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
