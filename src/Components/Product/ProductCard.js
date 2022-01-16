import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider"
import { useCartContext } from "../../context/CartProvider"
import { useWishListContext } from "../../context/WishListProvider"
import {
  addToCart,
  addTowishlist,
  removeFromwishlist,
} from "../../Utils/NetworkCalls"
import { isAlreadyExist } from "../../Utils/PureFunctions"

export const ProductCard = ({ product, buttonName }) => {
  const navigate = useNavigate()
  const { cartDispatch, cartState } = useCartContext()
  const { wishlistState, wishlistDispatch } = useWishListContext()
  const {
    name,
    description,
    price,
    gender,
    type,
    image,
    inStock,
    fastDelivery,
    _id: productId,
  } = product
  const isInWishList = isAlreadyExist(productId, wishlistState.wishlist)
  const isInCart = isAlreadyExist(productId, cartState.cart)
  const { userId, token } = useAuth()
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
              {isInWishList ? (
                <button
                  className="text-pink-500 hover:text-pink-600 p-2 rounded-full"
                  style={{ background: "rgba(0,0,0,0.8)" }}
                  onClick={() =>
                    removeFromwishlist(
                      productId,
                      userId,
                      token,
                      wishlistDispatch,
                      navigate
                    )
                  }
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  className="text-pink-500 hover:text-pink-600 p-2 rounded-full"
                  style={{ background: "rgba(0,0,0,0.1)" }}
                  onClick={() =>
                    addTowishlist(
                      productId,
                      userId,
                      token,
                      product,
                      wishlistDispatch,
                      navigate
                    )
                  }
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
          <div className="flex md:justify-between items-start px-2 pt-2">
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
            <div className="p-1 md:text-right">
              <div className="text-teal-500 font-semibold text-lg font-poppins">
                ₹{discountedPrice}
              </div>
              <div className="text-xs text-purple-500 line-through font-poppins">
                ₹{price}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center px-2 pb-2">
            <div className=" p-5 whitespace-nowrap">
              {buttonName ? (
                <>
                  {isInCart ? (
                    <div
                      className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-3 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center uppercase cursor-pointer"
                      onClick={() => navigate("/cart")}
                    >
                      Go to cart
                    </div>
                  ) : (
                    <div
                      className="bg-purple-600 cursor-pointer rounded-full py-2 px-3 my-2 text-sm whitespace-nowrap text-white uppercase hover:bg-purple-700 flex flex-row justify-center"
                      onClick={async () => {
                        addToCart(
                          productId,
                          userId,
                          token,
                          product,
                          cartDispatch,
                          navigate
                        )

                        removeFromwishlist(
                          productId,
                          userId,
                          token,
                          wishlistDispatch,
                          navigate
                        )
                      }}
                    >
                      {buttonName}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={`/product/${productId}`}
                  className="bg-purple-600 rounded-full py-2 px-3 my-2 text-sm whitespace-nowrap text-white uppercase hover:bg-purple-700 flex flex-row justify-center"
                >
                  {"View Details"}
                </Link>
              )}
            </div>
            {/* <div
              className="w-1/2 p-1
               
               bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-3 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center uppercase"
            >
              Add to cart
            </div> */}
            {!buttonName && (
              <>
                {isInCart ? (
                  <button
                    className="
               
               bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-3 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center uppercase"
                    disabled={!inStock}
                    onClick={() => navigate("/cart")}
                  >
                    Go to Cart
                  </button>
                ) : (
                  <button
                    className="w-1/2 p-1
               
               bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-3 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center uppercase"
                    disabled={!inStock}
                    onClick={() =>
                      addToCart(
                        productId,
                        userId,
                        token,
                        product,
                        cartDispatch,
                        navigate
                      )
                    }
                  >
                    {inStock ? "Add To Cart" : "Out of Stock"}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
