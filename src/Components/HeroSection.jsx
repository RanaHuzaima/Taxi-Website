import React from "react";
import Button from "./Button";
import CallBtn from "./CallBtn";

const HeroSection = ({ hero_value }) => {
  const { subtitle, title, button, text, img_link, bookBtn, callBtn, btnText } =
    hero_value;
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
                {bookBtn && <Button btnText={btnText} />}
                {callBtn && <CallBtn />}
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
