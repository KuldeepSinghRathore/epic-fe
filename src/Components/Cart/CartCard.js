import React from "react"
import { Link } from "react-router-dom"

export const CartCard = ({ product }) => {
  const { name, price, type, image } = product
  return (
    <div className="    flex items-center hover:bg-purple-100 p-8 pt-0">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24 " src={image} alt={name || "product"} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{name}</span>
          <span className="text-purple-500  text-xs">{type}</span>
          <Link className="font-semibold hover:text-purple-600 text-purple-500 text-xs">
            Remove
          </Link>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg className="fill-current text-purple-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
        <div className="mx-2 border text-center w-8">1</div>
        <svg className="fill-current text-purple-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm"> ${price}</span>
      <span className="text-center w-1/5 font-semibold text-sm"> ${price}</span>
    </div>
  )
}
