import axios from "axios"
import React, { useState } from "react"
import { useAddress } from "../../context/AddressProvider"
import { useAuth } from "../../context/AuthProvider"
import { API } from "../../Utils/API"
export const CheckOut = () => {
  const { fetchAddress } = useAddress()
  const { token } = useAuth()
  const [AddressData, setAddressData] = useState({
    city: "",
    state: "",
    street: "",
    landmark: "",
    pin: "",
    mobile: "",
  })
  const handleAddressChange = (e) => {
    setAddressData({
      ...AddressData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { status } = await axios.post(`${API}/address/`, AddressData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (status === 200) {
        fetchAddress(token)

        setAddressData({
          city: "",
          state: "",
          street: "",
          landmark: "",
          pin: "",
          mobile: "",
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div>
        <div className="w-full md:w-96 md:max-w-full mx-auto">
          <div className="p-6 border border-gray-300 sm:rounded-md">
            <form onSubmit={handleSubmit}>
              <label className="block mb-2">
                <span className="text-gray-700">Street</span>
                <input
                  name="street"
                  type="text"
                  minLength="4"
                  value={AddressData.street}
                  onChange={handleAddressChange}
                  className="block w-full mt-1   border-gray-300 shadow-sm rounded-md"
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">LandMark</span>
                <input
                  name="landmark"
                  type="text"
                  minLength="3"
                  value={AddressData.landmark}
                  onChange={handleAddressChange}
                  className="
      block
      w-full
      mt-1
      border-gray-300
      rounded-md
      shadow-sm
      focus:border-indigo-300
      focus:ring
      focus:ring-indigo-200
      focus:ring-opacity-50
    "
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">City</span>
                <input
                  name="city"
                  type="text"
                  minLength="4"
                  value={AddressData.city}
                  onChange={handleAddressChange}
                  className="
      block
      w-full
      mt-1
      border-gray-300
      rounded-md
      shadow-sm
      focus:border-indigo-300
      focus:ring
      focus:ring-indigo-200
      focus:ring-opacity-50
    "
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">State</span>
                <input
                  name="state"
                  type="text"
                  minLength="3"
                  value={AddressData.state}
                  onChange={handleAddressChange}
                  className="
      block
      w-full
      mt-1
      border-gray-300
      rounded-md
      shadow-sm
      focus:border-indigo-300
      focus:ring
      focus:ring-indigo-200
      focus:ring-opacity-50
    "
                />
              </label>
              <label className="block mb-2">
                <span className="text-gray-700">Pin code</span>
                <input
                  name="pin"
                  type="text"
                  minLength="6"
                  maxLength="6"
                  value={AddressData.pin}
                  onChange={handleAddressChange}
                  className="
      block
      w-full
      mt-1
      border-gray-300
      rounded-md
      shadow-sm
      focus:border-indigo-300
      focus:ring
      focus:ring-indigo-200
      focus:ring-opacity-50
    "
                />
              </label>

              <label className="block mb-2">
                <span className="text-gray-700">Mobile</span>
                <input
                  name="mobile"
                  type="number"
                  minLength="10"
                  maxLength="10"
                  onChange={handleAddressChange}
                  value={AddressData.mobile}
                  className="
      block
      w-full
      mt-1
      border-gray-300
      rounded-md
      shadow-sm
      focus:border-purple-300
      focus:ring
      focus:ring-purple-200
      focus:ring-opacity-50
    "
                />
              </label>

              <div className="mb-2">
                <button
                  type="submit"
                  className="
      h-10
      px-5
      text-purple-100
      bg-purple-700
      rounded-lg
      transition-colors
      duration-150
      focus:shadow-outline
      hover:bg-purple-800
    "
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
