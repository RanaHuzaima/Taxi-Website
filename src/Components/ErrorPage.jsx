import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className=" container flex justify-center">
        <Link to="/">
          <img src="/404Error.gif" alt="404 Error" />
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
