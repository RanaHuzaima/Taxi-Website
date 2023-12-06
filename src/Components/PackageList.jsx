import React from "react";
import PackageItem from "./PackageItem";

const PackageList = ({ packagesData }) => {
  return (
    <>
      <div className=" container">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {packagesData.map((data) => (
            <PackageItem key={data.title} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PackageList;
