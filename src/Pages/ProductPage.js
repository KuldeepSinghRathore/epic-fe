import React from "react"
import { Filter } from "../Components/Filter/Filter"
import { MobileFilter } from "../Components/Filter/MobileFilter"
import { ProductListing } from "../Components/Product/ProductListing"
import { useFilter } from "../context/FilterProvider"

export const ProductPage = () => {
  const { toggle } = useFilter()
  return (
    <div className=" bg-purple-200 ">
      <div className=" fixed  bottom-10 left-0  md:hidden ">
        {toggle && <MobileFilter />}
      </div>

      <div className="hidden fixed  top-16 left-0  md:block">
        <Filter />
      </div>

      <div className="md:flex-[0.8] md:ml-[25vw] ">
        <ProductListing />
      </div>
    </div>
  )
}
