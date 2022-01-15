import React from "react"
import { useData } from "../../context/DataProvider"
import { useFilter } from "../../context/FilterProvider"
import { getFilteredData, getSortedData } from "../../Utils/PureFunctions"
import { ProductCard } from "./ProductCard"

export const ProductListing = () => {
  const { productData } = useData()
  const { filterState } = useFilter()
  const sortedData = getSortedData(productData, filterState.sortBy)
  const filteredData = getFilteredData(sortedData, filterState)
  console.log("productData", productData)
  return (
    <div className="flex  -z-50 w-[75vw] bg-purple-100 gap-3 py-5 p-1 flex-wrap">
      {filteredData.length > 0 &&
        filteredData.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
    </div>
  )
}
