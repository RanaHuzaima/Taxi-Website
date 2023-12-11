import React from "react";
import BookCard from "./BookCard";

const PickSection = () => {
  const cardata = [
    {
      id: "CamryCarId",
      link: "https://harmaintransport.com/wp-content/uploads/2020/04/5.png",
      name: "CAMRY 4 Seater CAR",
    },
    {
      id: "InnovaCarId",
      link: "https://harmaintransport.com/wp-content/uploads/2020/04/4.png",
      name: "INNOVA 7 Seater MPV",
    },
    {
      id: "HiaceId",
      link: "https://harmaintransport.com/wp-content/uploads/2020/04/3.png",
      name: "HIACE 10 Seater Van",
    },
    {
      id: "GmcSuvId",
      link: "https://harmaintransport.com/wp-content/uploads/2020/04/2.png",
      name: "GMC 7 Seater SUV",
    },
    {
      id: "H1HyundaiId",
      link: "https://harmaintransport.com/wp-content/uploads/2023/07/H1-Hyundain-New.png",
      name: "H1 HYUNDAI 7 Seater Van",
    },
    {
      id: "HyundaiStariaId",
      link: "https://i.ibb.co/7CNgB2D/hyundai-staria-63d1fe79af681-prev-ui-1.png",
      name: "HYUNDAI Staria Van",
    },
  ];
  return (
    <>
      <div className="container text-center mx-auto bg-white mb-12 ">
        <div className="flex justify-center mb-14 text-4xl font-extrabold leading-tight lg:text-5xl">
          <span>
            Pick Your <span className="text-yellow-400">Umrah</span> Taxi
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {/* Book Card */}
          <BookCard data={cardata} />
        </div>
      </div>
    </>
  );
};

export default PickSection;
