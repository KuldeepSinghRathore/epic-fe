import React from "react"
import loader from "../../assets/loader.svg"
export const Loading = () => (
  <div className="flex flex-col h-screen items-center justify-center ">
    <span className="text-xl font-bold">Loading...</span>
    <img src={loader} alt="loader" />
  </div>
)
