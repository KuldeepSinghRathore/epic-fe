import React from "react"

export const CartItems = () => {
  return (
    <div>
      <div className="  px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">3 Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-purple-600 text-xs uppercase w-2/5">
            Product Details
          </h3>
          <h3 className="font-semibold text-center text-purple-600 text-xs uppercase w-1/5 text-center">
            Quantity
          </h3>
          <h3 className="font-semibold text-center text-purple-600 text-xs uppercase w-1/5 text-center">
            Price
          </h3>
          <h3 className="font-semibold text-center text-purple-600 text-xs uppercase w-1/5 text-center">
            Total
          </h3>
        </div>
      </div>
    </div>
  )
}
