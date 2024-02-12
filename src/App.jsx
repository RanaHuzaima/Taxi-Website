import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./app.css";
import Header from "./Components/Header";
import Whatsappicon from "./Components/Whatsappicon";
import Footer from "./Components/Footer";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Whatsappicon />
      <AnimatedRoutes />
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
