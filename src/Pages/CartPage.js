import React from "react"
import { CartCard } from "../Components/Cart/CartCard"
import { CartItems } from "../Components/Cart/CartItems"
import { OrderSummary } from "../Components/Cart/OrderSummary"

export const CartPage = () => {
  const sample = {
    _id: "61e0f37a1ca113ae184543b0",
    name: "Light Brown Shirt",
    description: "Light Brown Shirt for Women",
    price: 364,
    gender: "women",
    type: "shirt",
    image: "https://image.ibb.co/nNmKz5/img2.jpg",
    category: "clothes",
    inStock: true,
    fastDelivery: false,
    created_at: "2022-01-14T03:52:26.838Z",
    updatedAt: "2022-01-14T03:52:26.838Z",
    __v: 0,
  }
  return (
    <div className="flex flex-col md:flex-row h-[90vh]">
      <div className="flex-[0.8] bg-purple-100 ">
        <div>
          <CartItems />
        </div>
        <div className="overflow-y-auto h-[20vh] md:h-[50vh]">
          <CartCard product={sample} />
          <CartCard product={sample} />
          <CartCard product={sample} />
          <CartCard product={sample} />
        </div>
      </div>
      <div className="flex-[0.2] bg-pink-50 md:bg-purple-50">
        <div className=" px-8 py-10 ">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="overflow-y-auto h-[40vh]">
            <OrderSummary product={sample} />
            <OrderSummary product={sample} />
            <OrderSummary product={sample} />
            <OrderSummary product={sample} />
            <OrderSummary product={sample} />
            <OrderSummary product={sample} />
            <OrderSummary product={sample} />
            <OrderSummary product={sample} />
            <OrderSummary product={sample} />
            <OrderSummary product={sample} />
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>$600</span>
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
