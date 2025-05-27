import React from "react"
import loader from "../../assets/loader.svg"

export const Loading = (props) => (
  <div className="flex flex-col min-h-screen  items-center justify-center ">
    <div className=" h-full">
      <h1 className="font-bold text-xl">
        Please wait for a minute or Retry after 2 min.
      </h1>
      <p className="text-center text-lg font-bold">
        Server Hosted On Free tier so it takes time
      </p>
    </div>
    {/* <span className="text-xl font-bold">Loading...</span> */}
    <img src={loader} alt="loader" />
  </div>
)
