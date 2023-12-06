import React from "react";
import SimpleSection from "../Components/SimpleSection";
import Breadcrumbs from "../Components/Breadcrumbs";
import AlertMessage from "../Components/AlertMessage";
import PackageList from "../Components/PackageList";

const ToyotaHiAcePackages = () => {
  const Simple_info = {
    title: "Toyota HiAce Packages",
    imgLink:
      "https://billplz-production.s3.amazonaws.com/uploads/open_collection/photo/135790/retina_d7ea64166da8d918bbae365975b18519-toyota-hiace-for-rent-kl-selangor.png",
    text: "Experience the ultimate in convenience and comfort with our <strong>Umrah Taxi Service</strong> in Makkah. We’re dedicated to ensuring your pilgrimage journey is as smooth as possible, offering a variety of tailored travel packages to meet your specific needs. <br/> <br/> Our Taxi in Makkah is your trusted partner for all your transportation requirements during your <strong>Umrah pilgrimage</strong>",
  };
  const packagesData = [
    {
      title: "Package 1",
      listData: {
        list0: "Jeddah airport to Makkah Hotel",
        list1: "Makkah hotel to Madinah hotel",
        list2: "Madinah hotel to Madinah airport",
      },
      price: "Cost 1300 SAR",
    },
    {
      title: "Package 2",
      listData: {
        list0: "Madinah airport to Madinah hotel",
        list1: "Madinah hotel to Makkah hotel",
        list2: "Makkah hotel to Jeddah airport",
      },
      price: "Cost 1300 SAR",
    },
    {
      title: "Package 3",
      listData: {
        list0: "Jeddah airports to Makkah hotel",
        list1: "Makkah Ziyarah",
        list2: "Makkah hotel to Madinah hotel",
        list3: "Madinah Ziyarah",
        list4: "Madinah hotel to Madinah airport",
      },
      price: "Cost 2000 SAR",
    },
    {
      title: "Package 4",
      listData: {
        list0: "Madinah airport to Madinah Hotel",
        list1: "Madinah Ziyarah",
        list2: "Madinah Hotel to Makkah hotel",
        list3: "Makkah Ziyarah",
        list4: "Makkah Hotel to Jeddah airport",
      },
      price: "Cost 2000 SAR",
    },
    {
      title: "Package 5",
      listData: {
        list0: "Jeddah airport to Makkah Hotel",
        list1: "Makkah hotel to Madinah Hotel",
        list2: "Madinah hotel to Makkah Hotel",
        list3: "Makkah hotel to Jeddah airport",
      },
      price: "Cost 2000 SAR",
    },
    {
      title: "Package 6",
      listData: {
        list0: "Jeddah airport to Makkah hotel",
        list1: "Makkah Ziyarah",
        list2: "Makkah hotel to Madinah hotel",
        list3: "Madinah Ziyarah",
        list4: "Madinah hotel to Makkah hotel",
        list5: "Makkah Hotel to Jeddah airport",
      },
      price: "Cost 2700 SAR",
    },
    {
      title: "Package 7",
      listData: {
        list0: "Jeddah to Makkah Hotel",
        list1: "Makkah hotel to Madinah Hotel",
        list2: "Madinah to Jeddah",
      },
      price: "Cost 1700 SAR",
    },
    {
      title: "Package 8",
      listData: {
        list0: "Jeddah airport to Makkah hotel",
        list1: "Makkah Ziyarah",
        list2: "Makkah hotel to Madinah hotel",
        list3: "Madinah Ziyarah",
        list4: "Madinah hotel to Jeddah Airport",
      },
      price: "Cost 2400 SAR",
    },
  ];

  return (
    <>
      <Breadcrumbs page="Toyota-HiAce" link="/toyota-hiace-packages" />
      <SimpleSection Simple_value={Simple_info} />
      <AlertMessage />
      <PackageList packagesData={packagesData} />
    </>
  );
};

export default ToyotaHiAcePackages;
