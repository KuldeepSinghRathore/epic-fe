import React from "react"
import { Hero } from "../Components/Layout/Hero"
import { Collection } from "../Components/Layout/Collection"
import { FilterCollections } from "../Utils/PureFunctions"
import { useData } from "../context/DataProvider"

export const HomePage = () => {
  const { productData } = useData()
  const men = FilterCollections(productData, "men")
  const women = FilterCollections(productData, "women")
  return (
    <div className="pb-12 mb-60">
      <Hero />
      <div className="flex flex-col h-screen  justify-between ">
        <Collection name={"Men's"} arr={men} />

        <Collection name={"Women's"} arr={women} />
      </div>
    </div>
  )
}
