import React from "react"
import { OrderList } from "../Components/Orders/OrderList"
import { useOrder } from "../context/OrderProvider"

export const OrderHistoryPage = () => {
  const { orderData } = useOrder()

  if (orderData.orders.length === 0) {
    return <h1>Do Some Shopping</h1>
  }
  return (
    <div className="py-10 max-w-6xl mx-auto">
      <h1 className="text-center font-bold text-xl">Your Order History</h1>
      {orderData.orders.map((singleOrder) => (
        <div key={singleOrder._id}>
          <OrderList
            singleOrder={singleOrder}
            created_at={singleOrder.createdAt}
          />
        </div>
      ))}
    </div>
  )
}
