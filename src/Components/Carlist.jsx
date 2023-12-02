import React from "react";

const Carlist = ({ data }) => {
  return (
    <>
      {data.map((data) => (
        <div key={data.name} className="flex flex-col items-center ">
          <img src={data.link} alt="car-pics" />
          <span>{data.name}</span>
        </div>
      ))}
    </>
  );
};

export default Carlist;
