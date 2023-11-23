import React from "react";

const BookCard = ({ data }) => {
  return (
    <>
      {data.map((data) => (
        <div className="bg-white shadow-md border border-gray-200 rounded-lg ">
          <a href="#">
            <img className="rounded-t-lg" src={data.link} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <span className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                {data.name}
              </span>
            </a>
            <a
              href="#"
              className="text-white bg-yellow-400 hover:bg-yellow-600 font-medium rounded-lg text-sm px-3 py-2 text-center flex mt-4 items-center"
            >
              Book Now
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default BookCard;
