import React from "react";
import { Link } from "react-router-dom";

const Button = ({ btnText, btnLink, number, py="py-4" }) => {
  return (
    <>
      <Link
        className={`flex items-center justify-center ${py} text-lg font-bold text-white px-7 bg-yellow-400 hover:bg-yellow-600  transition duration-300 rounded-xl`}
        to={btnLink}
      >
        {btnText} <br /> {number}
      </Link>
    </>
  );
};

export default Button;
