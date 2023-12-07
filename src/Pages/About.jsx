import React, { useEffect } from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import HeroSection from "../Components/HeroSection";
import TimelineSection from "../Components/TimelineSection";
import Team from "../Components/Team";
import { motion } from "framer-motion";

const About = () => {
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
  const info = {
    subtitle: false,
    button: false,
    title: "About Us",
    text: "Mecca Taxi service is a premium transfer-providing company in the Saudi Arabia region. Our high-end and well-maintained vehicles are at your service to meet your transportation requirements whenever you need them. <br/> <br/> Get your ride instantly as you make your ride booking. We have an online booking system to avoid any booking stress. Our booking system is processing 24×7. Our service is reachable easily at airports and hotels and our service is also dedicated to pilgrims. If you are in a search of quick and affordable ride in Saudi then Mecca Taxi Service is what can end your search.",
    img_link: "https://i.ibb.co/HYq2Dmq/About-Us.gif",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transitionDuration: 1000 }}
    >
      <Breadcrumbs page="About" link="/about" />
      <HeroSection hero_value={info} />
      <TimelineSection />
      <Team />
    </motion.div>
  );
};

export default About;
