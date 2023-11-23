import React from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import HeroSection from "../Components/HeroSection";

const About = () => {
  const info = {
    subtitle: false,
    button: false,
    title: "About Us",
    text: "Mecca Taxi service is a premium transfer-providing company in the Saudi Arabia region. Our high-end and well-maintained vehicles are at your service to meet your transportation requirements whenever you need them. <br/> <br/> Get your ride instantly as you make your ride booking. We have an online booking system to avoid any booking stress. Our booking system is processing 24×7. Our service is reachable easily at airports and hotels and our service is also dedicated to pilgrims. If you are in a search of quick and affordable ride in Saudi then Mecca Taxi Service is what can end your search.",
    img_link: "https://i.ibb.co/jGc4tmQ/taxi-img.jpg",
  };
  return (
    <>
      <Breadcrumbs page="About" link="/about" />
      <HeroSection value={info} />
    </>
  );
};

export default About;
