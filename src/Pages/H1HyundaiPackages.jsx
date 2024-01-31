import React from "react";
import SimpleSection from "../Components/SimpleSection";
import Breadcrumbs from "../Components/Breadcrumbs";
import AlertMessage from "../Components/AlertMessage";
import PackageList from "../Components/PackageList";
import { motion } from "framer-motion";

const H1HyundaiPackages = () => {
  const Simple_info = {
    title: "H1 Hyundai Packages",
    imgLink:
      "https://ymimg1.b8cdn.com/resized/car_model/5172/logo/listing_main_H1.jpg",
    text: "Introducing the ultimate Al Rehman Tours & Taxi experience in Makkah! At Al Rehman Tours & Taxi Service, we are committed to providing you with a top-notch <strong>Al Rehman Tours & Taxi Service</strong> that will enhance your pilgrimage journey.<br/> <br/> Our Taxi in Makkah is your trusted partner for all your transportation needs during your Umrah pilgrimage. We understand the importance of a seamless and comfortable travel experience, which is why we offer a range of travel packages designed to cater to your specific requirements.",
  };
  const packagesData = [
    {
      title: "Package 1",
      listData: {
        list0: "Jeddah airport to Makkah Hotel",
        list1: "Makkah hotel to Madinah hotel",
        list2: "Madinah hotel to Madinah airport",
      },
      price: "Cost 1000 SAR",
    },
    {
      title: "Package 2",
      listData: {
        list0: "Madinah airport to Madinah hotel",
        list1: "Madinah hotel to Makkah hotel",
        list2: "Makkah hotel to Jeddah airport",
      },
      price: "Cost 1000 SAR",
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
      price: "Cost 1600 SAR",
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
      price: "Cost 1600 SAR",
    },
    {
      title: "Package 5",
      listData: {
        list0: "Jeddah airport to Makkah Hotel",
        list1: "Makkah hotel to Madinah Hotel",
        list2: "Madinah hotel to Makkah Hotel",
        list3: "Makkah hotel to Jeddah airport",
      },
      price: "Cost 1700 SAR",
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
      price: "Cost 2300 SAR",
    },
    {
      title: "Package 7",
      listData: {
        list0: "Jeddah to Makkah Hotel",
        list1: "Makkah hotel to Madinah Hotel",
        list2: "Madinah to Jeddah",
      },
      price: "Cost 1450 SAR",
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
      price: "Cost 2000 SAR",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transitionDuration: 1000 }}
    >
      <Breadcrumbs page="H1-Hyundai" link="/h1-hyundai-packages" />
      <SimpleSection Simple_value={Simple_info} />
      <AlertMessage />
      <PackageList packagesData={packagesData} />
    </motion.div>
  );
};

export default H1HyundaiPackages;
