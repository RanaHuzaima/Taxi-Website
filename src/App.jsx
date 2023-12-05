import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Book from "./Pages/Book";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./app.css";
import Whatsappicon from "./Components/Whatsappicon";
import TermCondition from "./Pages/TermCondition";
import Disclaimer from "./Pages/Disclaimer";

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
