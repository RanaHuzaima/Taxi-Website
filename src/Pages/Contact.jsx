import React, { useEffect, useRef } from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import HeroSection from "../Components/HeroSection";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import GoogleMap from "../Components/GoogleMap";
import ContactForm from "../Components/ContactForm";
import ContactCta from "../Components/ContactCta";

const Contact = () => {
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
    btnText: "Contact Us",
    title: "Contact Us",
    text: "Greetings from the Umrah taxi service. We are committed to provide the most up-to-date information about umrah taxi services.Our goal is to offer creative and environmentally friendly transportation options that make it easier for Muslims to travel for religious, academic, and cultural purposes. <br> <br> We are a company that values cooperation, respect, excellence, and services.",
    img_link: "https://i.ibb.co/7ncyKGh/Service-24-7-1.gif",
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transitionDuration: 1000 }}
    >
      <Breadcrumbs page="Contact" link="/contact" />
      <HeroSection hero_value={info} />
      <ContactCta />
      <GoogleMap />
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
