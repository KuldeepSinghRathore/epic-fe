import React from "react"
import { useLocation } from "react-router-dom"
import { useFilter } from "../../context/FilterProvider"

export const Footer = () => {
  const { setToggle, toggle } = useFilter()
  const path = useLocation().pathname
  return (
    <div className="fixed inset-x-0 bottom-0">
      <div className="footer  bg-purple-50 border-t-2 h-3  border-gray-300 flex flex-row p-0 items-center m-0 justify-evenly text-center py-5 text-sm">
        <div className=" flex items-center justify-center">
          <h3 className="font-semibold text-gray-600 mr-2">Made With Love</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-purple-800"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {path === "/product" && (
          <button
            onClick={() => setToggle(!toggle)}
            className={`md:hidden py-2 px-5 text-xl  ${
              toggle && "bg-purple-500 text-purple-50"
            } `}
          >
            Filter & Sort
          </button>
        )}
        <p className="hidden">&copy; Copyright Reserved 2022</p>
      </div>
    </div>
  )
}
