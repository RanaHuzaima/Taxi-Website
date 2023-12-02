import React from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import HeroSection from "../Components/HeroSection";

const Contact = () => {
  const info = {
    subtitle: false,
    button: false,
    title: "Contact Us",
    text: "Greetings from the Umrah taxi service. We are committed to provide the most up-to-date information about umrah taxi services.Our goal is to offer creative and environmentally friendly transportation options that make it easier for Muslims to travel for religious, academic, and cultural purposes. <br> <br> We are a company that values cooperation, respect, excellence, and services.",
    img_link: "https://svgshare.com/i/10Mj.svg",
  };
  return (
    <>
      <Breadcrumbs page="Contact" link="/contact" />
      <HeroSection hero_value={info} />
      <div className="container flex flex-col mx-auto bg-white">
        <div className="flex justify-center text-4xl font-extrabold leading-tight lg:text-6xl">
          <span>
            <span className="text-yellow-400">Contact</span> Taxi Service
          </span>
        </div>

        <div className="grid w-full grid-cols-1 my-auto mt-8 mb-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-5 md:gap-5">
          <div class="p-10 flex flex-col items-center text-center   hover:bg-slate-50 cursor-pointer">
            <span class="p-5 rounded-full bg-yellow-400 text-white shadow-lg shadow-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M12 2c3.196 0 6 2.618 6 5.602 0 2.238-1.058 3.488-2.659 5.381-1.078 1.274-2.303 2.722-3.341 4.697-1.038-1.976-2.263-3.423-3.341-4.697-1.601-1.893-2.659-3.143-2.659-5.381 0-2.984 2.804-5.602 6-5.602zm0-2c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
              </svg>
            </span>
            <p class="text-xl font-medium text-slate-700 mt-3">Location</p>
            <p class="mt-2 text-sm text-slate-500">
              Makkah Al-Mukarma Kingdom Saudi Arabia
            </p>
          </div>
          <div class="p-10 flex flex-col items-center text-center  hover:bg-slate-50 cursor-pointer">
            <span class="p-5 rounded-full bg-yellow-400 text-white shadow-lg shadow-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376" />
              </svg>
            </span>
            <p class="text-xl font-medium text-slate-700 mt-3">
              Contact Number
            </p>
            <p class="mt-2 text-sm text-slate-500">
              <a href="tel:+966-59-670-4817">+966-59-670-4817</a> <br />
              <a href="tel:+966-59-670-4817">+966-59-670-6891</a>
            </p>
          </div>
          <div class="p-10 flex flex-col items-center text-center  hover:bg-slate-50 cursor-pointer">
            <span class="p-5 rounded-full  bg-yellow-400 text-white shadow-lg shadow-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </span>
            <p class="text-xl font-medium text-slate-700 mt-3">Mail Address</p>
            <p class="mt-2 text-sm text-slate-500">
              <a href="mailto:huzaima@gmail.com">
                booking@UmrahTaxiService.com
              </a>{" "}
              <br />
              <a href="mailto:huzaima@gmail.com">info@UmrahTaxiService.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
