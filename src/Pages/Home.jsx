import React from "react";
import HeroSection from "../Components/HeroSection";
import Fleet from "../Components/Fleet";
import SimpleSection from "../Components/SimpleSection";
import PickSection from "../Components/PickSection";
import ChooseSection from "../Components/ChooseSection";
import TestimonialSection from "../Components/TestimonialSection";

const Home = () => {
  const hero_info = {
    subtitle: true,
    button: true,
    title: "Lets Book Your Umrah Taxi Instantly",
    text: "Experience seamless and convenient Umrah pilgrimage with our top-notch Umrah Taxi Service. We offer reliable transportation, experienced drivers, and exceptional customer service to ensure a worry-free journey.",
    img_link: "https://i.ibb.co/jGc4tmQ/taxi-img.jpg",
  };
  const Simple_info = {
    title: "Any Group Size, Any Distance.",
    text: "Our Umrah Taxi company is first of it’s kind of cab service specializing for in Transport service giving the chance of instant online booking for numerous type of vehicles varying in sizes depending on the number of members in the group. For the best ground transportation experience, let us provide our recognised transport service for your Umrah, family or business trip, parties, airport transfers and corporate travel needs, in Makkah or Madinah.",
  };
  return (
    <>
      <HeroSection hero_value={hero_info} />
      <Fleet />
      <SimpleSection Simple_value={Simple_info} />
      <PickSection />
      <ChooseSection />
      <TestimonialSection />
    </>
  );
};

export default Home;
