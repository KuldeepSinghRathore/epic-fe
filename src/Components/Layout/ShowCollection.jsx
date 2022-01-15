import React from "react"
import { Link } from "react-router-dom"

export const ShowCollection = ({ item, index }) => {
  const { name, image, _id } = item
  return index >= 4 ? null : (
    <div className="flex m-2 mx-auto">
      <div className="shadow-lg rounded-lg w-screen md:w-fit h-fit">
        <Link to="/" className="flex justify-center">
          <img
            src={image}
            className="rounded-tl-lg rounded-tr-lg   imgs"
            alt="img"
          />
        </Link>
        <div className="p-3">
          <h3>
            <Link to="/">{name}</Link>
          </h3>

          <div className="flex flex-col xl:flex-row justify-between">
            <Link
              to="/"
              className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-1 px-2 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
            >
              Add to cart
            </Link>
            <Link
              to={`/product/${_id}`}
              className="bg-purple-600 rounded-full py-1 px-2 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
