import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero-Section */}
      <div className="container flex flex-col mx-auto bg-white">
        <div className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
          <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
            <div className="flex items-center justify-center mb-4 lg:justify-normal">
              <img
                className="h-5"
                src="https://icones.pro/wp-content/uploads/2021/02/icone-de-localisation-jaune.png"
                alt="logo"
              />
              <h4 className="ml-2 text-sm font-bold tracking-widest text-yellow-400 uppercase">
                online taxi service provides
              </h4>
            </div>
            <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl">
              Lets <span className="text-yellow-400">Book</span> Your Umrah
              <span className="text-yellow-400">Taxi</span> Instantly
            </h1>
            <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
              Experience seamless and convenient Umrah pilgrimage with our
              top-notch Umrah Taxi Service. We offer reliable transportation,
              experienced drivers, and exceptional customer service to ensure a
              worry-free journey.
            </p>
            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <button className="flex items-center py-4 text-lg font-bold text-white px-7 bg-yellow-400 hover:bg-yellow-600  transition duration-300 rounded-xl">
                Book Now
              </button>
              <button className="flex items-center py-4 text-lg font-medium px-7 text-yellow-400 hover:text-white transition duration-300 rounded-xl border hover:bg-yellow-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Call Now
              </button>
            </div>
          </div>
          <div className="items-center justify-end hidden col-span-1 md:flex">
            <img
              className="w-4/5 rounded-md"
              src="https://media.istockphoto.com/id/492362277/photo/3d-yellow-taxi.jpg?s=612x612&w=0&k=20&c=RXoWaS8t0UrqGN0cFxrbLDROw_bThdCrh-lSYjWU5L0="
              alt="header image"
            />
          </div>
        </div>
      </div>
      {/* Fleet-Section */}
      <div className="container mx-auto bg-white">
        <div className="flex justify-center mb-14 text-4xl font-extrabold leading-tight lg:text-6xl">
          <span>
            Our <span className="text-yellow-400">Fleets</span>
          </span>
        </div>
        <div className="items-center text-center mb-8 font-semibold lg:text-lg">
          <div className="flex flex-row md:flex-nowrap lg:flex-nowrap flex-wrap">
            <div className="flex flex-col items-center ">
              <img
                src="https://harmaintransport.com/wp-content/uploads/2020/04/5.png"
                alt="ticket-icon"
              />
              <span>CAMRY 4 Seater CAR</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://harmaintransport.com/wp-content/uploads/2020/04/4.png"
                alt="hidden-fee-icon"
              />
              <span>INNOVA 7 Seater MPV</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://harmaintransport.com/wp-content/uploads/2020/04/3.png"
                alt="lowest-rates-icon"
              />
              <span>HIACE 10 Seater Van</span>
            </div>
          </div>
          <div className="flex flex-row md:flex-nowrap lg:flex-nowrap flex-wrap">
            <div className="flex flex-col items-center">
              <img
                src="https://harmaintransport.com/wp-content/uploads/2020/04/2.png"
                alt="pick-up-icon"
              />
              <span>GMC 7 Seater SUV</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://harmaintransport.com/wp-content/uploads/2023/07/H1-Hyundain-New.png"
                alt="pick-up-icon"
              />
              <span>H1 HYUNDAI 7 Seater Van</span>
            </div>
          </div>
        </div>
      </div>
      {/* Size-Section */}
      <div className="container flex flex-col mx-auto bg-white">
        <div className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
          <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
            <span className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl">
              Any Group <span className="text-yellow-400">Size,</span> Any
              <span className="text-yellow-400"> Distance.</span>
            </span>
            <p className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-grey-900">
              Our Umrah Taxi company is first of it’s kind of cab service
              specializing for in Transport service giving the chance of instant
              online booking for numerous type of vehicles varying in sizes
              depending on the number of members in the group. For the best
              ground transportation experience, let us provide our recognised
              transport service for your Umrah, family or business trip,
              parties, airport transfers and corporate travel needs, in Makkah
              or Madinah.
            </p>
          </div>
          <div className="items-center justify-end hidden col-span-1 md:flex">
            <img
              className="rounded-md "
              src="https://harmainziarah.com/wp-content/uploads/2023/08/HarmainZiarah-Vehicles.png"
              alt="image"
            />
          </div>
        </div>
      </div>
      {/* Pick-Section */}
      <div className="container mx-auto bg-white mb-12">
        <div className="flex justify-center mb-14 text-4xl font-extrabold leading-tight lg:text-6xl">
          <span>
            Pick Your <span className="text-yellow-400">Umrah</span> Taxi
          </span>
        </div>
        <div class="flex gap-4 lg:flex-nowrap flex-wrap">
          <div class="bg-white shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://harmaintransport.com/wp-content/uploads/2020/04/5.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <span class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                  CAMRY 4 Seater CAR
                </span>
              </a>
              <a
                href="#"
                class="text-white bg-yellow-400 hover:bg-yellow-600 font-medium rounded-lg text-sm px-3 py-2 text-center flex mt-4  items-center"
              >
                Book Now
                <svg
                  class="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="bg-white shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://harmaintransport.com/wp-content/uploads/2020/04/4.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <span class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                  INNOVA 7 Seater MPV
                </span>
              </a>
              <a
                href="#"
                class="text-white bg-yellow-400 hover:bg-yellow-600 font-medium rounded-lg text-sm px-3 py-2 text-center flex mt-4 items-center"
              >
                Book Now
                <svg
                  class="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="bg-white shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://harmaintransport.com/wp-content/uploads/2020/04/3.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <span class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                  HIACE 10 Seater Van
                </span>
              </a>
              <a
                href="#"
                class="text-white bg-yellow-400 hover:bg-yellow-600 font-medium rounded-lg text-sm px-3 py-2 text-center flex mt-4 items-center"
              >
                Book Now
                <svg
                  class="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="bg-white shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://harmaintransport.com/wp-content/uploads/2020/04/2.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <span class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                  GMC 7 2022 Seater SUV
                </span>
              </a>
              <a
                href="#"
                class="text-white bg-yellow-400 hover:bg-yellow-600 font-medium rounded-lg text-sm px-3 py-2 text-center flex mt-4 items-center"
              >
                Book Now
                <svg
                  class="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="bg-white shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://harmaintransport.com/wp-content/uploads/2023/07/H1-Hyundain-New.png"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <span class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                  H1 HYUNDAI 7 Seater Van
                </span>
              </a>
              <a
                href="#"
                class="text-white bg-yellow-400 hover:bg-yellow-600 font-medium rounded-lg text-sm px-3 py-2 text-center flex mt-4 items-center"
              >
                Book Now
                <svg
                  class="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Choose-Section */}
      <div className="container mx-auto bg-white">
        <div className="flex justify-center mb-14 text-4xl font-extrabold leading-tight lg:text-6xl">
          <span>
            Why <span className="text-yellow-400">Choose</span> Us
          </span>
        </div>
        <div className="flex flex-wrap justify-around text-center mb-8 font-semibold text-lg">
          <div className="flex flex-col items-center">
            <img
              src="https://makkahmadinataxiservices.com/wp-content/uploads/2022/10/plane-ticket.png"
              alt="ticket-icon"
              width={70}
            />
            <span>Airport Transfer</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://makkahmadinataxiservices.com/wp-content/uploads/2022/10/file.png"
              alt="hidden-fee-icon"
              width={70}
            />
            <span>No Hidden Fee</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://makkahmadinataxiservices.com/wp-content/uploads/2022/10/tag.png"
              alt="lowest-rates-icon"
              width={70}
            />
            <span>Lowest Rates</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://makkahmadinataxiservices.com/wp-content/uploads/2022/10/24-hours-1.png"
              alt="pick-up-icon"
              width={70}
            />
            <span>24/7 Pickup</span>
          </div>
        </div>
      </div>
      {/* TESTIMONIALS */}
      <div class="container mx-auto bg-white mt-10 mb-10">
        <div class="container flex text-center flex-col m-auto px-6 md:px-12 xl:px-6">
          <span class="mb-14 text-4xl font-extrabold leading-tight lg:text-6xl">
            Some Our <span className="text-yellow-400">Testimonial</span>
          </span>
          <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
            <div class="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
              <div class="h-full flex flex-col justify-center space-y-4">
                <img
                  class="w-20 h-20 mx-auto rounded-full"
                  src="https://www.svgrepo.com/show/382096/female-avatar-girl-face-woman-user.svg"
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <p class="text-gray-600 md:text-xl">
                  <span class="font-serif">"</span>Book harmain zirah taxi
                  service for travelling from Medina to Makkah and also from
                  Makkah to Jeddah. Polite and good drivers clean cars and great
                  service. Reached on time and helped reaching right terminal
                  for airport.
                  <span class="font-serif">"</span>
                </p>
                <div>
                  <h6 class="text-lg font-semibold leading-none">Adila</h6>
                </div>
              </div>
            </div>

            <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
              <img
                class="w-20 h-20 mx-auto rounded-full"
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-No-Background.png"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p class="text-gray-600">
                  <span class="font-serif">"</span>Thanks to Abu Usman for
                  arranging a great trip from Madinah to Makkah … medina
                  ziyarat, Makkah ziyarat and to the airport with no hassle at
                  all. Pick up was on time and Profesional service and kept us
                  well informed during ziyarat
                  <span class="font-serif">"</span>
                </p>
                <div>
                  <h6 class="text-lg font-semibold leading-none">Ali</h6>
                </div>
              </div>
            </div>
            <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
              <img
                class="w-20 h-20 mx-auto rounded-full"
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p class="text-gray-600">
                  <span class="font-serif">"</span>Best Service… very easy to
                  book.. very quickly response. Sorted out Ziyaraat in Medina
                  the driver was excellent he knew all the main areas and
                  explained them really well. Very profesional taxi service for
                  ziarat.. Thanks Harmain Ziarah
                  <span class="font-serif">"</span>
                </p>
                <div>
                  <h6 class="text-lg font-semibold leading-none">Abu Usman </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Us */}
    </>
  );
};

export default Home;
