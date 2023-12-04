import React from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import HeroSection from "../Components/HeroSection";

const Contact = () => {
  const info = {
    subtitle: false,
    button: true,
    bookBtn: true,
    callBtn: false,
    btnText: "Contact Us",
    title: "Contact Us",
    text: "Greetings from the Umrah taxi service. We are committed to provide the most up-to-date information about umrah taxi services.Our goal is to offer creative and environmentally friendly transportation options that make it easier for Muslims to travel for religious, academic, and cultural purposes. <br> <br> We are a company that values cooperation, respect, excellence, and services.",
    img_link: "https://i.ibb.co/7ncyKGh/Service-24-7-1.gif",
  };
  return (
    <>
      <Breadcrumbs page="Contact" link="/contact" />
      <HeroSection hero_value={info} />
      {/* CTA Icon */}
      <div className="container flex flex-col mx-auto bg-white">
        <div className="flex justify-center text-4xl font-extrabold leading-tight lg:text-6xl">
          <span>
            <span className="text-yellow-400">Contact</span> Taxi Service
          </span>
        </div>

        <div className="grid w-full grid-cols-1 my-auto mt-8 mb-8 md:grid-cols-3 lg:grid-cols-3 xl:gap-5 md:gap-5">
          <div className="p-10 flex flex-col items-center text-center   hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-yellow-400 text-white shadow-lg shadow-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602zm0-2c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">Location</p>
            <p className="mt-2 text-sm text-slate-500">
              Makkah Al-Mukarma Kingdom Saudi Arabia
            </p>
          </div>
          <div className="p-10 flex flex-col items-center text-center  hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-yellow-400 text-white shadow-lg shadow-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376" />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Contact Number
            </p>
            <p className="mt-2 text-sm text-slate-500">
              <a href="tel:+966-59-670-4817">+966-59-670-4817</a> <br />
              <a href="tel:+966-59-670-4817">+966-59-670-6891</a>
            </p>
          </div>
          <div className="p-10 flex flex-col items-center text-center  hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full  bg-yellow-400 text-white shadow-lg shadow-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </span>
            <p className="text-xl font-medium text-slate-700 mt-3">
              Mail Address
            </p>
            <p className="mt-2 text-sm text-slate-500">
              <a href="mailto:huzaima@gmail.com">
                booking@UmrahTaxiService.com
              </a>{" "}
              <br />
              <a href="mailto:huzaima@gmail.com">info@UmrahTaxiService.com</a>
            </p>
          </div>
        </div>
      </div>
      {/* Google Map */}
      <div className="container">
        <div className="text-gray-600 body-font">
          <div className=" w-full h-full bg-gray-300">
            <iframe
              className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951142.3876132265!2d38.655573678124995!3d21.374151100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c205ec2de11183%3A0xf8e8dc7efb6d0e0f!2sUmrah%20Taxi%20Service!5e0!3m2!1sen!2s!4v1701507349703!5m2!1sen!2s"
              height="500px"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Cantact Form */}
      <div className="container flex flex-col mx-auto bg-white">
        <div className="flex justify-center mt-10 text-4xl font-extrabold leading-tight lg:text-6xl">
          <span>
            Contact
            <span className="text-yellow-400"> Us</span>
          </span>
        </div>
        <form action="https://formspree.io/f/xoqoogal" method="POST">
          <div className="w-full p-8 my-4 md:px-12 mr-auto">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3 mt-5">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                name="Name"
                placeholder="Name"
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                name="Email"
                placeholder="Email"
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline number"
                type="number"
                name="Phone-Number"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message"
                name="Message"
                required
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 flex justify-center items-center">
              <button className="uppercase text-sm font-bold tracking-wide bg-yellow-400 hover:bg-yellow-600 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
