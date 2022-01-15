import React from "react"
import { Link } from "react-router-dom"
import { useFilter } from "../../context/FilterProvider"

export const Navbar = () => {
  const { filterState, filterDispatch } = useFilter()
  return (
    <div className="pt-16">
      <div className="fixed inset-x-0 top-0 h-16 items-center justify-between py-2 px-3 flex text-center shadow bg-purple-50">
        <div className="flex-1">
          <Link to="/">
            <h1 className="font-extrabold text-left text-xl cursor-pointer text-purple-900 ml-2">
              EPIC
            </h1>
          </Link>
        </div>
        <div className="flex-1 flex justify-end  p-1 border-2 ">
          <input
            type="text"
            placeholder="Search..."
            value={filterState.searchQuery}
            className="w-full focus-within:text-purple-600 placeholder-purple-500 outline-purple-700 "
            onChange={(e) =>
              filterDispatch({ type: "SEARCH", payload: e.target.value })
            }
          />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 font-semibold pointer-events-none text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
        <div className="flex-1 flex justify-end gap-3">
          <span className="relative inline-block ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-purple-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold leading-none text-purple-100 transform bg-purple-600 rounded-full">
              9
            </span>
          </span>
          <Link to="/cart">
            <span className="relative inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-purple-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold leading-none text-purple-100 transform bg-purple-600 rounded-full">
                9
              </span>
            </span>
          </Link>
          <span className=" inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-purple-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}
