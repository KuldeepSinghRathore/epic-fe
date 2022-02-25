import React from "react"
import { OrderCard } from "./OrderCard"

export const OrderList = ({ singleOrder, created_at }) => {
  return (
    <div className="m-2 rounded-md hover:shadow-lg">
      {singleOrder?.orderItems.map((orderCard) => (
        <OrderCard
          singleOrder={orderCard}
          key={orderCard._id}
          orderDate={created_at}
        />
      ))}
    </div>
  )
}
