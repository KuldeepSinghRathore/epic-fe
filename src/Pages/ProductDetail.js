import React from "react"
import { Link, useParams } from "react-router-dom"
import { useData } from "../context/DataProvider"

export const ProductDetail = () => {
  const { productId } = useParams()
  const { productData } = useData()
  const detail =
    productData.length > 0 &&
    productData.find((product) => product._id === productId)
  const discountedPrice = detail.price - parseInt((detail.price * 15) / 100)
  return (
    <div className=" px-20  m-20 flex items-center flex-col md:flex-row whitespace-nowrap max-w-screen-sm md:h-[70vh]">
      <div className="flex-1 ">
        <img src={detail.image} alt="" className="min-w-[250px]" />
      </div>
      <div className="flex-1 flex mt-12 flex-col items-start justify-between">
        <div className="self-start">
          <h1 className="text-purple-900 font-bold">{detail.name}</h1>
          <span className="text-fuchsia-400 block">{detail.description}</span>
          <span className="text-purple-400">
            <span className="text-purple-800">Old Price:</span> {detail.price}
          </span>
          <span className="block text-purple-400">
            <span className="text-purple-800">New Price:</span>{" "}
            {discountedPrice}(15%){" "}
          </span>
        </div>
        <div>
          <h2 className="text-purple-900 font-bold">About the Item</h2>
          <div className="text-fuchsia-800">
            <p className="text-fuchsia-400">{detail.description}</p>
          </div>
        </div>
        <div className="flex flex-col self-start">
          <span className="text-fuchsia-400 font-bold">
            <span className="text-purple-800 mr-2"> Category:</span>
            {detail.category}
          </span>
          <span className="text-fuchsia-400 font-bold">
            <span className="text-purple-800 mr-2"> Type:</span>
            {detail.type}
          </span>
          <span className="text-fuchsia-400 font-bold">
            <span className="text-purple-800 mr-2"> Suited:</span>
            {detail.gender}{" "}
          </span>
          <span className="text-fuchsia-400 font-bold">
            <span className="text-purple-800 mr-2"> Instock:</span>
            {detail.inStock ? "true" : "false"}
          </span>
          <span className="text-fuchsia-400 font-bold">
            <span className="text-purple-800 mr-2"> FastDelivery:</span>
            {detail.fastDelivery ? "true" : "false"}
          </span>
        </div>
        <div className="flex justify-center items-center px-2 pb-2">
          <div className=" p-1">
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
  )
}
