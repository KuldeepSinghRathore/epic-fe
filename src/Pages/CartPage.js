import React, { useEffect } from "react"
import { useJwt } from "react-jwt"
import { useNavigate } from "react-router-dom"
import { CartCard } from "../Components/Cart/CartCard"
import { CartItems } from "../Components/Cart/CartItems"
import { OrderSummary } from "../Components/Cart/OrderSummary"
import { useAuth } from "../context/AuthProvider"
import { useCartContext } from "../context/CartProvider"

export const CartPage = () => {
  const { cartState, cartDispatch } = useCartContext()
  const { isLogin } = useAuth()
  const { isExpired } = useJwt()
  // if (isExpired) {
  //   localStorage.clear()
  // }
  const totalCart = cartState?.cart.reduce(
    (acc, curr) => (acc = acc + curr?.product?.price * curr?.quantity),
    0
  )

  return (
    <div className="flex flex-col md:flex-row h-[90vh]">
      <div className="flex-[0.8] bg-purple-100 ">
        <div>
          <CartItems />
        </div>
        <div className="overflow-y-auto h-[20vh] md:h-[50vh]">
          {!cartState?.cart?.length > 0 ? (
            <h2>No Item In Your Cart</h2>
          ) : (
            cartState?.cart.map((item) => {
              return <CartCard product={item} key={item._id} />
            })
          )}
        </div>
      </div>
      <div className="flex-[0.2] bg-pink-50 md:bg-purple-50">
        <div className=" px-8 py-10 ">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="overflow-y-auto h-[40vh]">
            {!cartState?.cart?.length > 0 ? (
              <h2>No Item In Your Cart</h2>
            ) : (
              cartState?.cart.map((item) => {
                return (
                  <OrderSummary product={item.product} key={item.product._id} />
                )
              })
            )}
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>₹{totalCart}</span>
            </div>
            <button className="bg-purple-500 font-semibold hover:bg-purple-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
