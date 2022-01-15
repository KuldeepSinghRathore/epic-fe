import React from "react"
import { Link } from "react-router-dom"

export const Hero = () => {
  return (
    <div className="bg-purple-200">
      <div className=" md:flex md:flex-row mx-20  ">
        <div className="md:w-2/5 flex flex-col justify-center items-center">
          <h2 className="font-serif text-5xl text-gray-600 mb-4 text-center md:self-start md:text-left pt-2">
            Epic Collections
          </h2>
          <p className="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">
            place for epic choices.
          </p>
          {/* <p className="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">
          Our brand motto goes here.
        </p> */}
          <Link
            to="/product"
            className="bg-gradient-to-r from-purple-600 to-pink-400 rounded-full py-2 px-6 text-gray-50 uppercase text-xl md:self-start my-5"
          >
            Shop Now
          </Link>
        </div>
        <div className="md:w-3/5">
          {/* <img src={require("../../assets/")} /> */}
          <img
            src={require("../../assets/svgexport-7.svg").default}
            className="w-full h-3/4 mt-6 hidden md:block"
            alt="img"
          />
        </div>
      </div>
    </div>
  )
}
