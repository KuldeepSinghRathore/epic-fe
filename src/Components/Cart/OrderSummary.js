import React from "react"

export const OrderSummary = ({ product }) => {
  const { name, price } = product
  return (
    <div>
      <div className=" text-gray-500">
        <div className="flex justify-around mt-5 mb-5 flex-1">
          <span className="font-semibold text-sm uppercase text-purple-500">
            {name}
          </span>
          <span className="font-semibold text-sm">${price}</span>
        </div>
      </div>
    </div>
  )
}
