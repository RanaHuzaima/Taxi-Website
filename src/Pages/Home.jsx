import React from "react";

const Home = () => {
  return (
    <>
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
              Lets <span className="text-yellow-400">Book</span> Your Umrah{" "}
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
              <button className="flex items-center py-4 text-lg font-medium px-7 text-dark-grey-700 hover:text-dark-grey-900 transition duration-300 rounded-xl border hover:bg-yellow-500">
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
    </>
  );
};

export default Home;
