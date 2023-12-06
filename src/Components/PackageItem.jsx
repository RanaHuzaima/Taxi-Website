import React from "react";

const PackageItem = ({ data }) => {
  return (
    <>
      <div className="my-4 flex flex-col  items-center">
        <div className=" font-bold text-2xl text-yellow-400">{data.title}</div>
        <p className=" my-3">
          This Package includes the following trips with us
        </p>
        <ul className="text-center">
          {Object.values(data.listData).map((data, dataIndex) => (
            <li key={dataIndex} className="my-2 list-disc ">
              {data}
            </li>
          ))}
        </ul>
        <span className=" font-bold text-xl text-yellow-400 mt-2">
          {data.price}
        </span>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-5"></hr>
      </div>
    </>
  );
};

export default PackageItem;
