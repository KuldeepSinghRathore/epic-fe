import React from "react"
import { sample } from "../assets/sample"
import { ProductCard } from "../Components/Product/ProductCard"

export const WishlistPage = () => {
  return (
    <div className="flex  -z-50  bg-purple-100 gap-3 py-5 p-1 flex-wrap">
      {sample.map((product) => {
        return (
          <div>
            <ProductCard
              product={product}
              key={product._id}
              buttonName={"move to cart"}
            />
          </div>
        )
      })}
    </div>
  )
}
