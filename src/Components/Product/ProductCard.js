import React from "react"
import { Link } from "react-router-dom"

export const ProductCard = ({ product, buttonName }) => {
  const {
    _id,
    name,
    description,
    price,
    gender,
    type,
    image,

    fastDelivery,
  } = product

  const discountedPrice = price - parseInt((price * 15) / 100)
  return (
    <div className="flex justify-center items-center p-1 bg-purple-100 ">
      <div className="w-[90vw] md:w-full ">
        <div className="bg-white shadow-lg hover:shadow-xl rounded-lg ">
          <div
            className="bg-purple-400 h-64 w-[300px]  rounded-t-lg p-4 bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="text-right">
              <button
                className="text-pink-500 hover:text-pink-600 p-2 rounded-full"
                style={{ background: "rgba(0,0,0,0.8)" }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-start px-2 pt-2">
            <div className="p-2 flex-grow">
              <span className="text-xs text-purple-300 mr-1">#{gender}</span>
              <span className="text-xs text-purple-300 mr-1">#{type}</span>
              <span className="text-xs text-purple-300 mr-1">
                #{fastDelivery ? "fast delivery" : "normal-delivery"}
              </span>
              <h1 className="font-medium text-xl font-poppins">{name}</h1>
              <p className="text-purple-500 font-nunito whitespace-nowrap">
                {description}
              </p>
            </div>
            <div className="p-1 text-right">
              <div className="text-teal-500 font-semibold text-lg font-poppins">
                ₹{discountedPrice}
              </div>
              <div className="text-xs text-purple-500 line-through font-poppins">
                ₹{price}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center px-2 pb-2">
            <div className="w-1/2 p-1">
              <Link
                to={`/product/${_id}`}
                className="bg-purple-600 rounded-full py-2 px-3 my-2 text-sm whitespace-nowrap text-white uppercase hover:bg-purple-700 flex flex-row justify-center"
              >
                {buttonName ? buttonName : "View Details"}
              </Link>
            </div>
            <div className="w-1/2 p-1">
              <Link
                to="/"
                className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-3 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center uppercase"
              >
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
