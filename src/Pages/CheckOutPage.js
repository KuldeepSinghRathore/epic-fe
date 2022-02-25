import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useState } from "react"
import { AddressShow } from "../Components/CheckOut/AddressShow"
import { CheckOut } from "../Components/CheckOut/CheckOut"
import { useAddress } from "../context/AddressProvider"
import { useAuth } from "../context/AuthProvider"
import { useCartContext } from "../context/CartProvider"
import { API } from "../Utils/API"
import { useOrder } from "../context/OrderProvider"

export const CheckOutPage = () => {
  const { cartDispatch, cartState } = useCartContext()
  const { addressState } = useAddress()
  const { setIsOrder } = useOrder()

  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate()
  const { token } = useAuth()
  const handleOrder = async () => {
    //    delete cart from server
    toast("🦄 Order Placed!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    try {
      const response = await axios.post(
        `${API}/order/`,
        {
          orderItems: cartState.cart,
          addressId: addressState.selectedAddressId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const { status } = await axios.delete(`${API}/cart/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (status === 200 && response.status === 200) {
        setIsOrder((prev) => !prev)
        cartDispatch({ type: "CLEAR_SESSION" })
        navigate("/product")
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (addressState.address.length === 0) {
    return (
      <div className="mt-2">
        <div>
          <h1>There is No Saved Address Please Fill The Address</h1>

          <CheckOut />
        </div>{" "}
      </div>
    )
  }
  return (
    <div className="mt-2 py-10">
      <div>
        <span
          onClick={() => setIsVisible(!isVisible)}
          className="px-6 py-2 bg-purple-300 rounded-lg"
        >
          {isVisible ? "Close Address Form" : "Add New Address"}
        </span>
        {isVisible && <CheckOut />}
      </div>

      <div>
        <AddressShow />
      </div>
      <div
        onClick={handleOrder}
        className="bg-gradient-to-r max-w-sm from-red-600 to-pink-500 rounded-full py-2 px-3 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex  flex-row justify-center uppercase cursor-pointer"
      >
        Order
      </div>
    </div>
  )
}
