import React, { useEffect } from "react";
import HeroSection from "../Components/HeroSection";
import Fleet from "../Components/Fleet";
import SimpleSection from "../Components/SimpleSection";
import PickSection from "../Components/PickSection";
import ChooseSection from "../Components/ChooseSection";
import TestimonialSection from "../Components/TestimonialSection";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = (event) => {
      // Check if the user is scrolling down
      if (window.scrollY > 0) {
        // Prevent the default scroll behavior
        event.preventDefault();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const hero_info = {
    subtitle: true,
    button: true,
    bookBtn: true,
    callBtn: true,
    btnText: "Book Now",
    title: "Lets Book Your Umrah Taxi Instantly",
    text: "Experience seamless and convenient Umrah pilgrimage with our top-notch Al Rehman Tours & Taxi Service. We offer reliable transportation, experienced drivers, and exceptional customer service to ensure a worry-free journey.",
    img_link: "https://i.ibb.co/jGc4tmQ/taxi-img.jpg",
  };
  const Simple_info = {
    title: "Any Group Size, Any Distance.",
    imgLink:
      "https://harmainziarah.com/wp-content/uploads/2023/08/HarmainZiarah-Vehicles.png",
    text: "Our Al Rehman Tours & Taxi company is first of it’s kind of cab service specializing for in Transport service giving the chance of instant online booking for numerous type of vehicles varying in sizes depending on the number of members in the group. For the best ground transportation experience, let us provide our recognised transport service for your Umrah, family or business trip, parties, airport transfers and corporate travel needs, in Makkah or Madinah.",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transitionDuration: 1000 }}
    >
      <HeroSection hero_value={hero_info} />
      <Fleet />
      <SimpleSection Simple_value={Simple_info} />
      <PickSection />
      <ChooseSection />
      <TestimonialSection />
    </motion.div>
  );
};

export default Home;
