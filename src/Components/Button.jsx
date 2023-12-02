import React from "react";

const Button = ({ btnText }) => {
  return (
    <>
      <button className="flex items-center py-4 text-lg font-bold text-white px-7 bg-yellow-400 hover:bg-yellow-600  transition duration-300 rounded-xl">
        {btnText}
      </button>
    </>
  );
};

export default Button;
