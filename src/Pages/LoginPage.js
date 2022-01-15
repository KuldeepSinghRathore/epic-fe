import React from "react"
import { Link } from "react-router-dom"

export const LoginPage = () => {
  return (
    <div className="signIn-page">
      <br />
      <br />
      <div className="p-10">
        <h2
          className="text-center text-3xl leading-9 
          font-extrabold text-purple-800"
        >
          Sign In to your account
        </h2>
        <p
          className="text-center text-sm leading-5 
           text-purple-600"
        >
          Or
          <span className="text-gray-800 font-extrabold mx-2">
            <Link to="/signup">Create an account</Link>
          </span>
          It's simple and easy
          <br />
        </p>
        <br />
        <br />
        <form>
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
          {/** submit button */}
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="group w-full lg:w-1/3 md:w-2/3 py-2 px-4  border border-transparent text-sm leading-5 
                rounded-md text-white font-extrabold bg-purple-400 hover:bg-purple-500 focus:outline-none focus:border-purple-400 
                focus:shadow-outline-purple active:bg-purple-400 active:outline-none transition duration-150 ease-in-out"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
