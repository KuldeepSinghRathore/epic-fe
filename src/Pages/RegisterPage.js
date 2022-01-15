import React from "react"
import { Link } from "react-router-dom"

export const RegisterPage = () => {
  return (
    <div className="h-screen">
      <br />
      <div className="p-10">
        <h2
          className="text-center text-3xl leading-9 
          font-extrabold text-purple-800"
        >
          Create an account
        </h2>
        <p
          className="text-center text-sm leading-5 
           text-gray-600"
        >
          Or Already Have An Account
          <span className="text-purple-800 font-extrabold mx-2">
            <Link to="/login">Login</Link>
          </span>
          <br />
        </p>
        <br />

        <form>
          <div className="flex justify-center">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label
                className="block uppercase tracking-wide text-purple-700 text-xs font-bold mb-2"
                htmlFor="text"
              >
                FirstName
              </label>
              <input
                type="text"
                name="text"
                placeholder="firstname"
                className="bg-purple-200 appearance-none border-2 border-purple-200 rounded w-full 
                  py-2 px-4 text-purple-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label className="block uppercase tracking-wide text-purple-700 text-xs font-bold mb-2">
                LastName
              </label>
              <input
                type="text"
                placeholder="lastname"
                className="bg-purple-200 appearance-none border-2 border-purple-200 rounded w-full 
                  py-2 px-4 text-purple-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                required
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label
                className="block uppercase tracking-wide text-purple-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="*****@gmail.com"
                className="bg-purple-200 appearance-none border-2 border-purple-200 rounded w-full 
                  py-2 px-4 text-purple-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                required
              />
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label
                className="block uppercase tracking-wide text-purple-700 text-xs font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*********"
                className="bg-purple-200 appearance-none border-2 border-purple-200 rounded w-full 
                  py-2 px-4 text-purple-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                required
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="group w-full lg:w-1/3 md:w-2/3 py-2 px-4  border border-transparent text-sm leading-5 
                rounded-md text-white font-extrabold bg-purple-400 hover:bg-purple-500 focus:outline-none focus:border-purple-400 
                focus:shadow-outline-purple active:bg-purple-400 active:outline-none transition duration-150 ease-in-out"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
