import axios from "axios"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import { API } from "../Utils/API"

export const RegisterPage = () => {
  const { token } = useAuth()
  const navigate = useNavigate()
  const [signUpError, setSignUpError] = useState("")
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  const [confirmPass, setConfirmPass] = useState("")
  const handleChange = (e) => {
    setSignUpDetails({
      ...signUpDetails,
      [e.target.name]: e.target.value,
    })
  }
  const signUpHandler = async (e) => {
    try {
      e.preventDefault()
      const { firstName, lastName, email, password } = signUpDetails
      if (firstName && lastName && email && password) {
        const response = await axios.post(`${API}/user/signup`, signUpDetails)
        if (response.status === 200) {
          navigate("/login")
        }
        if (response.status === 403) {
          setSignUpError(response.data.message)
        }
        if (response.status === 400) {
          setSignUpError(response.data.message)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  if (token) {
    navigate("/")
  }
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
        {signUpError && setSignUpError}
        <br />

        <form onSubmit={signUpHandler}>
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
                name="firstName"
                placeholder="firstname"
                autoComplete="off"
                className="bg-purple-200 appearance-none border-2 border-purple-200 rounded w-full 
                  py-2 px-4 text-purple-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                value={signUpDetails.firstName}
                onChange={handleChange}
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
                autoComplete="off"
                name="lastName"
                className="bg-purple-200 appearance-none border-2 border-purple-200 rounded w-full 
                  py-2 px-4 text-purple-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                value={signUpDetails.lastName}
                onChange={handleChange}
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
                value={signUpDetails.email}
                onChange={handleChange}
                placeholder="*****@gmail.com"
                autoComplete="off"
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
                value={signUpDetails.password}
                onChange={handleChange}
                placeholder="*********"
                autoComplete="off"
                minLength="6"
                className="bg-purple-200 appearance-none border-2 border-purple-200 rounded w-full 
                  py-2 px-4 text-purple-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                required
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="lg:w-1/3 md:w-2/3 w-full">
              <label className="block uppercase tracking-wide text-purple-700 text-xs font-bold mb-2">
                Confirm Password:
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPass}
                autoComplete="off"
                placeholder="*********"
                onChange={(e) => setConfirmPass(e.target.value)}
                className="bg-purple-200 appearance-none border-2 border-purple-200 rounded w-full 
                  py-2 px-4 text-purple-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                required
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              value="SignUp"
              disabled={signUpDetails.password !== confirmPass}
              className="group w-full lg:w-1/3 md:w-2/3 py-2 px-4 cursor-pinter border border-transparent text-sm leading-5 
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
