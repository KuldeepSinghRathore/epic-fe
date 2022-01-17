import React from "react"
import { Filter } from "../Components/Filter/Filter"
import { ProductListing } from "../Components/Product/ProductListing"

export const ProductPage = () => {
  return (
    <div className="flex  justify-between bg-purple-200 h-screen">
      <div className=" fixed  top-16 left-0  md:block">
        <Filter />
      </div>
      <div className="md:flex-[0.8] ml-[25vw] ">
        <ProductListing />
      </div>
    </div>
  )
}
