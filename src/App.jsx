import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./app.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/pricing" element={<Pricing />}>
          Pricing
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/contact" element={<Contact />}>
          Contact Us
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
