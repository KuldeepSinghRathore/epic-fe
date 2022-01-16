import React from "react"
import { Link } from "react-router-dom"
import { ShowCollection } from "./ShowCollection"
export const Collection = ({ arr, name }) => {
  return (
    <div>
      <div className="my-2 z-0 ">
        <div className="flex flex-row justify-between p-5">
          <h2 className="text-3xl">{name && name} Collection</h2>
          <Link to="/" className="flex flex-row text-lg hover:text-purple-700">
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="md:flex md:gap-12 mb-5   ">
        {arr.map((item, index) => (
          <ShowCollection key={item._id} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}
