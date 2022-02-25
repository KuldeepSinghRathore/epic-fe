import React from "react"
import { useNavigate } from "react-router-dom"

export const OrderCard = ({ orderDate, singleOrder }) => {
  const navigate = useNavigate()

  const date = new Date(orderDate).toDateString()

  return (
    <div className="select-text flex gap-5 flex-wrap md:flex-nowrap justify-between items-center px-3 py-2 text-center bg-purple-50">
      <div
        className="flex  flex-[1/3] gap-4 items-center cursor-pointer md:min-w-[33.33%]"
        onClick={() => navigate(`/product/${singleOrder.product._id}`)}
      >
        <div className="w-[127px] ">
          <img
            src={singleOrder.product.image}
            alt=""
            className="w-full object-contain h-[95px]"
          />
        </div>
        <div className="text-purple-300 text-left">
          <p className="text-ellipsis overflow-hidden">
            {singleOrder.product.description}
          </p>
          <p>{singleOrder.product.name}</p>
          <p>for:{singleOrder.product.gender}</p>
        </div>
      </div>
      <div className="flex-[1/3]  md:min-w-[33.33%]">
        ₹{singleOrder.product.price}
      </div>
      <div className="flex-[1/3] md:min-w-[33.33%]">
        <span>{date}</span>
      </div>
    </div>
  )
}
