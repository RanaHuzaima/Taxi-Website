import React from "react";
import SimpleSection from "../Components/SimpleSection";
import Breadcrumbs from "../Components/Breadcrumbs";
import AlertMessage from "../Components/AlertMessage";
import PackageList from "../Components/PackageList";
import { motion } from "framer-motion";

const CamryCarPackages = () => {
  const Simple_info = {
    title: "Camry Car Packages",
    imgLink:
      "https://umrahtaxiservice.com/wp-content/uploads/2022/01/Camry-e1646725296506.png",
    text: "Discover the unmatched convenience and luxury of our <strong>Umrah Taxi Service</strong> in Makkah.  we’re dedicated to enhancing your pilgrimage experience by offering a range of tailored travel packages to suit your individual preferences and requirements. <br/> <br/> Our Taxi in Makkah is your trusted companion for all your transportation needs during your <strong>Umrah pilgrimage</strong>.",
  };
  const packagesData = [
    {
      title: "Package 1",
      listData: {
        list0: "Jeddah airport to Makkah Hotel",
        list1: "Makkah hotel to Madinah hotel",
        list2: "Madinah hotel to Madinah airport",
      },
      price: "Cost 800 SAR",
    },
    {
      title: "Package 2",
      listData: {
        list0: "Madinah airport to Madinah hotel",
        list1: "Madinah hotel to Makkah hotel",
        list2: "Makkah hotel to Jeddah airport",
      },
      price: "Cost 800 SAR",
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
      price: "Cost 1200 SAR",
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
      price: "Cost 1200 SAR",
    },
    {
      title: "Package 5",
      listData: {
        list0: "Jeddah airport to Makkah Hotel",
        list1: "Makkah hotel to Madinah Hotel",
        list2: "Madinah hotel to Makkah Hotel",
        list3: "Makkah hotel to Jeddah airport",
      },
      price: "Cost 1350 SAR",
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
      price: "Cost 1700 SAR",
    },
    {
      title: "Package 7",
      listData: {
        list0: "Jeddah to Makkah Hotel",
        list1: "Makkah hotel to Madinah Hotel",
        list2: "Madinah to Jeddah",
      },
      price: "Cost 1150 SAR",
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
      price: "Cost 1500 SAR",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transitionDuration: 1000 }}
    >
      <Breadcrumbs page="Camry-Car" link="/camry-car-packages" />
      <SimpleSection Simple_value={Simple_info} />
      <AlertMessage />
      <PackageList packagesData={packagesData} />
    </motion.div>
  );
};

export default CamryCarPackages;
