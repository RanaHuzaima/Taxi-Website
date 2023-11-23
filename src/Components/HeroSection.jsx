import React from "react";

const HeroSection = ({ hero_value }) => {
  const { subtitle, title, button, text, img_link } = hero_value;
  const words = title.split(" ");
  return (
    <>
      <div className="container flex flex-col mx-auto bg-white">
        <div className="grid w-full grid-cols-1 my-auto mt-12 mb-8 md:grid-cols-2 xl:gap-14 md:gap-5">
          <div className="flex flex-col justify-center col-span-1 text-center lg:text-start">
            {subtitle && (
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
            )}
            <h1 className="mb-8 text-4xl font-extrabold leading-tight lg:text-6xl">
              {words.map((word, index) => (
                <span
                  key={index}
                  style={
                    word === "Book" || word === "Taxi"
                      ? { color: "#FFD700" }
                      : {}
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p
              dangerouslySetInnerHTML={{ __html: text }}
              className="mb-6 text-base font-normal leading-7 lg:w-3/4 text-black"
            ></p>
            {button && (
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
            )}
          </div>
          <div className="items-center justify-end hidden col-span-1 md:flex">
            <img className="w-4/5 rounded-md" src={img_link} alt="hero image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
