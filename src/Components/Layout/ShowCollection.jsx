import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider"
import { useCartContext } from "../../context/CartProvider"
import { addToCart } from "../../Utils/NetworkCalls"
import { isAlreadyExist } from "../../Utils/PureFunctions"

export const ShowCollection = ({ item, index }) => {
  const { name, image, _id: productId, inStock } = item
  const navigate = useNavigate()
  const { cartState, cartDispatch } = useCartContext()
  const { userId, token } = useAuth()
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
            {/* <Link
              to="/"
              className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-1 px-2 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center"
            >
              Add to cart
            </Link> */}
            {isAlreadyExist(productId, cartState.cart) ? (
              <button
                className=" p-1
               
               bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-3 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center uppercase"
                disabled={!inStock}
                onClick={() => navigate("/cart")}
              >
                Go to Cart
              </button>
            ) : (
              <button
                className=" p-1
               whitespace-nowrap 
               bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-3 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center uppercase"
                disabled={!inStock}
                onClick={() =>
                  addToCart(
                    productId,
                    userId,
                    token,
                    item,
                    cartDispatch,
                    navigate
                  )
                }
              >
                {inStock ? "Add To Cart" : "Out of Stock"}
              </button>
            )}
            <button
              onClick={() => navigate(`/product/${productId}`)}
              className="whitespace-nowrap flex items-center  bg-purple-600 rounded-full py-1 px-2 my-2 text-sm
              text-white hover:bg-purple-700  flex-row justify-center"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
