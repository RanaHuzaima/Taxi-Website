import React from "react";
import SimpleSection from "../Components/SimpleSection";
import Breadcrumbs from "../Components/Breadcrumbs";
import AlertMessage from "../Components/AlertMessage";
import PackageList from "../Components/PackageList";
import { motion } from "framer-motion";

const GmcCarPackages = () => {
  const Simple_info = {
    title: "Gmc Suv Packages",
    imgLink:
      "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/43dbea3c-98fc-4dcb-8a97-e97b9c9468dc/431a173e-a21f-48fd-8cff-60b17114e106.png",
    text: "Experience the epitome of convenience and luxury with our <strong>Al Rehman Tours & Taxi Service</strong> in Makkah. We are devoted to elevating your pilgrimage experience by offering a spectrum of tailored travel packages that cater precisely to your individual preferences and requirements.<br/> <br/> Our Taxi in Makkah is your unwavering companion for all your transportation needs during your sacred <strong>Umrah journey</strong>.",
  };
  const packagesData = [
    {
      title: "Package 1",
      listData: {
        list0: "Jeddah airport to Makkah Hotel",
        list1: "Makkah hotel to Madinah hotel",
        list2: "Madinah hotel to Madinah airport",
      },
      price: "Cost 1400 SAR",
    },
    {
      title: "Package 2",
      listData: {
        list0: "Madinah airport to Madinah hotel",
        list1: "Madinah hotel to Makkah hotel",
        list2: "Makkah hotel to Jeddah airport",
      },
      price: "Cost 1400 SAR",
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
      price: "Cost 2200 SAR",
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
      price: "Cost 3000 SAR",
    },
    {
      title: "Package 7",
      listData: {
        list0: "Jeddah to Makkah Hotel",
        list1: "Makkah hotel to Madinah Hotel",
        list2: "Madinah to Jeddah",
      },
      price: "Cost 1900 SAR",
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
      price: "Cost 2600 SAR",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transitionDuration: 1000 }}
    >
      <Breadcrumbs page="GMC-Car" link="/gmc-car-packages" />
      <SimpleSection Simple_value={Simple_info} />
      <AlertMessage />
      <PackageList packagesData={packagesData} />
    </motion.div>
  );
};

export default GmcCarPackages;
