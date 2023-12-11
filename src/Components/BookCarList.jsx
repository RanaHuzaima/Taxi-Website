import React from "react";
import seat from "/seat.png";
import fan from "/fan.png";

const BookCarList = ({ carData }) => {
  return (
    <>
      {carData.map((car, index) => (
        <div
          key={index}
          id={car.id}
          className="container flex flex-col mx-auto bg-white"
        >
          <div className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
            <div className="flex flex-col justify-center text-center lg:text-start">
              <h1 className="mb-4 text-2xl font-extrabold leading-tight lg:text-4xl">
                {car.carName}
              </h1>
              <div className="flex  gap-3 items-center justify-center lg:justify-start">
                <a className="flex gap-2 text-center font-bold text-xl">
                  <img className="w-6 mb-4" src={seat} alt="seat-icon" />
                  {car.seat}
                </a>
                <a className="flex gap-2 text-center font-bold text-xl">
                  <img className="w-6 mb-4" src={fan} alt="fan-icon" /> AC
                </a>
              </div>
              <div className="flex flex-col items-center gap-4 lg:flex-row">
                <ul>
                  {Object.values(car.routeData).map((route, routeIndex) => (
                    <li
                      key={routeIndex}
                      className="mb-1"
                      dangerouslySetInnerHTML={{ __html: route }}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className="items-center justify-end col-span-1 md:flex">
              <img
                className="rounded-md w-full"
                src={car.imgLink}
                alt="hero image"
              />
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default BookCarList;
