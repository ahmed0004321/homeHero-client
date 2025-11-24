import React from "react";
import { useNavigate } from "react-router";
import errorImg from '../assets/error-404.png'

const Error404 = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-6 md:gap-10 justify-center items-center my-12 md:my-20 px-4">
      <img
        className="animate-bounce w-48 sm:w-64 md:w-80 lg:w-96"
        src={errorImg}
        alt=""
      />
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Oops, page not found!
        </h1>
        <p className="py-4 md:p-5 text-gray-400 text-sm sm:text-base">
          The page you are looking for is not available.
        </p>
        <button
          onClick={() => navigate("/")}
          className="btn bg-gradient-to-r from-[#3f51ff] to-[#8a00ff] text-white border-none hover:opacity-90 w-full sm:w-auto px-8"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error404;
