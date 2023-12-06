import React from "react";
import SimpleSection from "../Components/SimpleSection";
import Breadcrumbs from "../Components/Breadcrumbs";
import AlertMessage from "../Components/AlertMessage";
import PackageItem from "../Components/PackageItem";

const CamryCarPackages = () => {
  const Simple_info = {
    title: "Camry Car Packages",
    imgLink:
      "https://umrahtaxiservice.com/wp-content/uploads/2022/01/Camry-e1646725296506.png",
    text: "Discover the unmatched convenience and luxury of our <strong>Umrah Taxi Service</strong> in Makkah.  we’re dedicated to enhancing your pilgrimage experience by offering a range of tailored travel packages to suit your individual preferences and requirements. <br/> <br/> Our Taxi in Makkah is your trusted companion for all your transportation needs during your Umrah pilgrimage.",
  };
  return (
    <>
      <Breadcrumbs page="Camry-Car" link="/camry-car-packages" />
      <SimpleSection Simple_value={Simple_info} />
      <AlertMessage />
      <PackageItem />
    </>
  );
};

export default CamryCarPackages;
