import React from "react";

const TimelineSection = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
          {/* left*/}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-yellow-400 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-bold text-2xl mb-1">Our Vision</h3>
              <p className="leading-tight text-justify">
                Our vision is to provide the best taxi service to our clients at
                an affordable pricing to meet our clients satisfaction.
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-400 shadow"></div>
            </div>
          </div>
          {/* right*/}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-400 shadow"></div>
            </div>
            <div className="bg-yellow-400 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-bold text-2xl mb-1">Our Mission</h3>
              <p className="leading-tight text-justify">
                Our mission is to offer the best service to families of
                pilgrim’s and to every customers satisfying and memorable
                journeys that they’ve always wanted.
              </p>
            </div>
          </div>
          {/* left */}
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-yellow-400 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-bold text-2xl mb-1">Best Collection</h3>
              <p className="leading-tight text-justify">
                We have many varieties of vehicles Like GMS, Camry Car, H1
                Hyundai, Hiace, Innova, Staria.
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-400 shadow"></div>
            </div>
          </div>
          {/* right*/}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-400 shadow"></div>
            </div>
            <div className="bg-yellow-400 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-bold text-2xl mb-1">Best Pricing</h3>
              <p className="leading-tight text-justify">
                Discover unbeatable value with our premium services. Offering
                the best pricing in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineSection;
