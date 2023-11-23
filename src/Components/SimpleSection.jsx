import React from "react";

const SimpleSection = ({ Simple_value }) => {
  const { title, text } = Simple_value;
  const words = title.split(" ");

  return (
    <>
      <div className="container flex flex-col mx-auto bg-white">
        <div className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
          <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
            <span className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl">
              {words.map((word, index) => (
                <span
                  key={index}
                  style={
                    word === "Size," || word === "Distance."
                      ? { color: "#FFD700" }
                      : {}
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </span>
            <p className="mb-6 text-base font-normal leading-7 lg:w-3/4">
              {text}
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
    </>
  );
};

export default SimpleSection;
