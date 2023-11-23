import React from "react";
import Carlist from "./Carlist";

const Fleet = () => {
  const cardata = [
    {
      link: "https://harmaintransport.com/wp-content/uploads/2020/04/5.png",
      name: "CAMRY 4 Seater CAR",
    },
    {
      link: "https://harmaintransport.com/wp-content/uploads/2020/04/4.png",
      name: "INNOVA 7 Seater MPV",
    },
    {
      link: "https://harmaintransport.com/wp-content/uploads/2020/04/3.png",
      name: "HIACE 10 Seater Van",
    },
    {
      link: "https://harmaintransport.com/wp-content/uploads/2020/04/2.png",
      name: "GMC 7 Seater SUV",
    },
    {
      link: "https://harmaintransport.com/wp-content/uploads/2023/07/H1-Hyundain-New.png",
      name: "H1 HYUNDAI 7 Seater Van",
    },
    {
      link: "https://i.ibb.co/7CNgB2D/hyundai-staria-63d1fe79af681-prev-ui-1.png",
      name: "HYUNDAI Staria 9 Seater Van",
    },
  ];
  return (
    <>
      <div className="container mx-auto bg-white">
        <div className="flex justify-center mb-14 text-4xl font-extrabold leading-tight lg:text-6xl">
          <span>
            Our <span className="text-yellow-400">Fleets</span>
          </span>
        </div>
        <div className="items-center text-center mb-8 font-semibold lg:text-lg">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            <Carlist data={cardata} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fleet;
