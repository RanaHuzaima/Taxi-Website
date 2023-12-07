import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import Book from "../Pages/Book";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import TermCondition from "../Pages/TermCondition";
import Disclaimer from "../Pages/Disclaimer";
import CamryCarPackages from "../Pages/CamryCarPackages";
import GmcCarPackages from "../Pages/GmcCarPackages";
import HyundaiStariaPackages from "../Pages/HyundaiStariaPackages";
import ToyotaHiAcePackages from "../Pages/ToyotaHiAcePackages";
import H1HyundaiPackages from "../Pages/H1HyundaiPackages";
import InnovaCarPackages from "../Pages/InnovaCarPackages";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/book" element={<Book />}>
            Book
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/contact" element={<Contact />}>
            Contact Us
          </Route>
          <Route path="/terms-conditions" element={<TermCondition />}>
            Term & Condition
          </Route>
          <Route path="/disclaimer" element={<Disclaimer />}>
            Disclaimer
          </Route>
          <Route path="/camry-car-packages" element={<CamryCarPackages />}>
            Camry Car Packages
          </Route>
          <Route path="/gmc-car-packages" element={<GmcCarPackages />}>
            Gmc Car Packages
          </Route>
          <Route
            path="/hyundai-staria-packages"
            element={<HyundaiStariaPackages />}
          >
            Hyundai Staria Packages
          </Route>
          <Route
            path="/toyota-hiace-packages"
            element={<ToyotaHiAcePackages />}
          >
            Toyota HiAce Packages
          </Route>
          <Route path="/h1-hyundai-packages" element={<H1HyundaiPackages />}>
            H1 Hyundai Packages
          </Route>
          <Route path="/Innova-car-packages" element={<InnovaCarPackages />}>
            Innova Car Packages
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
