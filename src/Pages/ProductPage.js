import React, { useEffect, useState } from "react"
import { Filter } from "../Components/Filter/Filter"
import { MobileFilter } from "../Components/Filter/MobileFilter"
import { ProductListing } from "../Components/Product/ProductListing"
import { useFilter } from "../context/FilterProvider"
const useWindowSize = () => {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth])
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth])
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return size
}
export const ProductPage = () => {
  const [height, width] = useWindowSize()
  const { toggle } = useFilter()
  return (
    // <div className="flex  justify-between bg-purple-200 h-screen">
    <div className=" bg-purple-200 ">
      height:{height} width:{width}
      {width < 700 ? (
        <div className=" fixed  bottom-10 left-0  md:block">
          {toggle && <MobileFilter />}
        </div>
      ) : (
        <div className=" fixed  top-16 left-0  md:block">
          <Filter />
        </div>
      )}
      <div className="md:flex-[0.8] md:ml-[25vw] ">
        <ProductListing />
      </div>
    </div>
  )
}
