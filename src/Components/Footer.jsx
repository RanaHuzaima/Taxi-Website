import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_901hbzf",
        "template_o2pgg8j",
        form.current,
        "AX0Zi8A6oJKlELg9r"
      )
      .then(
        (result) => {
          toast.success("Email Sent", { autoClose: 1800 });
          e.target.reset();
        },
        (error) => {
          toast.error("Email Not Sent", { autoClose: 1900 });
        }
      );
  };
  return (
    <>
      <footer className="container">
        <div className="container px-6 pt-12 mx-auto  bg-gray-100 p-4 mb-2 rounded-lg shadow-[0px_2px_5px_1px_rgba(48,48,48,0.55)] py-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
            <div className="">
              <h1 className="max-w-lg text-xl font-bold text-center md:text-start tracking-tight text-black xl:text-2xl ">
                Subscribe our newsletter to get update.
              </h1>

              <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    id="email"
                    name="email"
                    required
                    type="text"
                    className="px-4 py-2 text-black bg-white border rounded-md w-full mb-3 focus:border-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-yellow-300"
                    placeholder="Email Address"
                  />

                  <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto  focus:outline-none bg-yellow-400 rounded-lg hover:bg-yellow-600 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <div className="flex items-center flex-col">
              <p className=" text-black text-2xl font-extrabold ">Quick Link</p>
              <ul className="flex flex-col items-center mt-5 space-y-2">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `font-bold hover:text-yellow-400  rounded-lg ${
                        isActive ? "text-yellow-400 text-2xl " : ""
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
                      `font-bold  hover:text-yellow-400  rounded-lg ${
                        isActive ? "text-yellow-400 text-2xl" : ""
                      }`
                    }
                    to="/book"
                  >
                    Book
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `font-bold  hover:text-yellow-400  rounded-lg ${
                        isActive ? "text-yellow-400 text-2xl" : ""
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
                      `font-bold  hover:text-yellow-400  rounded-lg ${
                        isActive ? "text-yellow-400 text-2xl" : ""
                      }`
                    }
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center flex-col">
              <p className=" text-black text-2xl font-extrabold ">Other Link</p>
              <ul className="flex flex-col items-center mt-5 space-y-2">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `font-bold hover:text-yellow-400 rounded-lg ${
                        isActive ? "text-yellow-400 text-2xl" : ""
                      }`
                    }
                    to="/terms-conditions"
                  >
                    Terms and Conditions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `font-bold  hover:text-yellow-400  rounded-lg ${
                        isActive ? "text-yellow-400 text-2xl" : ""
                      }`
                    }
                    to="/disclaimer"
                  >
                    Disclaimer
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-6 border-gray-300 " />

          <div className="flex items-center justify-between">
            <a href="#">
              <img
                className="w-auto h-16 lg:h-28"
                src="/logo web.png"
                alt="footer-logo"
              />
            </a>

            <div className="flex -mx-2">
              <a
                href="#"
                target="_blank"
                className="mx-2 text-gray-600 transition-colors duration-300  hover:text-yellow-400 "
                aria-label="Facebook"
              >
                <svg
                  className="w-9 h-9 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                </svg>
              </a>

              <a
                href="#"
                className="mx-2 text-gray-600 transition-colors duration-300  hover:text-yellow-400 "
                aria-label="Instagram"
              >
                <svg
                  className="w-9 h-9 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                className="mx-2 text-gray-600 transition-colors duration-300  hover:text-yellow-400 "
                aria-label="Whatsapp"
              >
                <svg
                  className="w-9 h-9 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
                </svg>
              </a>
            </div>
          </div>
          <span className="block text-black text-sm mb-2 text-center">
            © 2024{" "}
            <Link to="/" className="hover:underline cursor-pointer">
              Al Rehman Tours & Taxi™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
