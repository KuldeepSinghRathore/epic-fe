import React from "react"
import { useAddress } from "../../context/AddressProvider"

export const AddressShow = () => {
  const { addressState, addressDispatch } = useAddress()
  return (
    <div className="p-10 h-full   md:flex ">
      {addressState.address.length > 0 &&
        addressState.address.map((address, index) => (
          <div key={index?.toString()} className="border-2 p-5 ">
            <div>
              {addressState.selectedAddressId === address._id ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() =>
                    addressDispatch({
                      type: "SETID",
                      payload: address._id,
                    })
                  }
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              )}

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
          </div>
        ))}
    </div>
  )
}
