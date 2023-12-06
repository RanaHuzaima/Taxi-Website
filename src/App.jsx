import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Header from "./Components/Header";
import Whatsappicon from "./Components/Whatsappicon";
import Home from "./Pages/Home";
import Book from "./Pages/Book";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import TermCondition from "./Pages/TermCondition";
import Disclaimer from "./Pages/Disclaimer";
import CamryCarPackages from "./Pages/CamryCarPackages";

import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Whatsappicon />
      <Routes>
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
