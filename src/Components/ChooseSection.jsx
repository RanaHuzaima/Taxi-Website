import React from "react";

const ChooseSection = () => {
  return (
    <>
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

export default ChooseSection;
