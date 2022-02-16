import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { CheckOut } from "../Components/CheckOut/CheckOut"
import { useAddress } from "../context/AddressProvider"
import { useAuth } from "../context/AuthProvider"
import { useCartContext } from "../context/CartProvider"
import { API } from "../Utils/API"

export const CheckOutPage = () => {
  const { cartDispatch } = useCartContext()
  const { addressState } = useAddress()

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
      const { status } = await axios.delete(`${API}/cart/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (status === 200) {
        cartDispatch({ type: "CLEAR_SESSION" })
        navigate("/product")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex mt-2">
      <div>
        {!addressState.address.length > 0 && (
          <h1>There is No Saved Address Please Fill The Address</h1>
        )}
        <CheckOut />
      </div>

      <div>
        {addressState.address.length > 0 &&
          addressState.address.map((address, index) => (
            <div key={index?.toString()} className="border-2 p-5">
              <div>
                <p className="pb-1 text-purple-300">
                  <span className=" font-bold text-purple-800">street: </span>{" "}
                  {address.street}
                </p>
                <p className="pb-1 text-purple-300">
                  <span className=" font-bold text-purple-800">landmark:</span>{" "}
                  {address.landmark}
                </p>
                <p className="pb-1 text-purple-300">
                  <span className=" font-bold text-purple-800">city: </span>{" "}
                  {address.city}
                </p>
                <p className="pb-1 text-purple-300">
                  <span className=" font-bold text-purple-800">state: </span>{" "}
                  {address.state}
                </p>
                <p className="pb-1 text-purple-300">
                  <span className=" font-bold text-purple-800">zip: </span>{" "}
                  {address.pin}
                </p>
                <p className="pb-1 text-purple-300">
                  <span className=" font-bold text-purple-800">mobile: </span>{" "}
                  {address.mobile}
                </p>
              </div>
              <div
                onClick={handleOrder}
                className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-3 my-2 text-sm text-white hover:bg-pink-600 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center uppercase cursor-pointer"
              >
                Order
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
