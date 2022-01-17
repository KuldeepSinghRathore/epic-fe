import React from "react"
import { ProductCard } from "../Components/Product/ProductCard"
import { useWishListContext } from "../context/WishListProvider"

export const WishlistPage = () => {
  const { wishlistState } = useWishListContext()

  return (
    <div className="flex  -z-50 h-screen bg-purple-100 gap-3 py-5 p-1 flex-wrap">
      {!wishlistState.wishlist.length > 0 ? (
        <h2 style={{ textAlign: "center", width: "100%" }}>
          No Items In Wishlist
        </h2>
      ) : (
        wishlistState?.wishlist.map(({ product }) => {
          return (
            <div key={product._id}>
              <ProductCard
                product={product}
                key={product._id}
                buttonName={"move to cart"}
              />
            </div>
          )
        })
      )}
    </div>
  )
}
