import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { setUpAuthHeaders, useAuth } from "../context/AuthProvider"
import { useCartContext } from "../context/CartProvider"
import { API } from "../Utils/API"

export const LoginPage = () => {
  const location = useLocation()
  const { cartDispatch } = useCartContext()
  const navigate = useNavigate()
  const { setToken, setUserId, setIsLogin, isLogin, userId, token } = useAuth()
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    })
  }
  const handleLogin = async (e, guest) => {
    e.preventDefault()
    const from = location.state?.from?.pathname || "/"

    try {
      if ((loginDetails.email && loginDetails.password) || guest) {
        const {
          data: { token, userId },
          status,
        } = await axios.post(
          `${API}/user/login`,
          guest
            ? {
                email: "guest@gmail.com",
                password: "testing123",
              }
            : loginDetails
        )
        await setUpAuthHeaders(token)
        if (status === 200) {
          setError(false)
          setIsLogin(true)
          setIsLoading(false)
          localStorage.setItem(
            "userInfo",
            JSON.stringify({ token, userId, isLogin: true })
          )

          setToken(token)
          setUserId(userId)
          navigate(from)
        }
      } else {
        setError("Please fill all the fields")
      }
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }
  // get cart

  useEffect(() => {
    if (isLogin && userId) {
      // get cart
      const getCartFromServer = async (userId, token) => {
        try {
          const { status, data } = await axios.get(`${API}/cart/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          if (status === 401) {
            setIsLogin(false)
            setToken(null)
            setUserId(null)
            localStorage.removeItem("userInfo")
          }
          if (status === 200) {
            cartDispatch({
              type: "LOAD_CART",
              payload: data.cart.cartItems,
            })
          }
        } catch (error) {
          console.log(error)
          const { status, data } = error.response
          if (status !== 200 && status !== 401) {
            setError(data.message)
          }
        }
      }
      getCartFromServer(userId, token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="text-center">{error && error}</div>
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
          <form onSubmit={handleLogin}>
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
                  value={loginDetails.email}
                  onChange={handleChange}
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
                  minLength="6"
                  value={loginDetails.password}
                  onChange={handleChange}
                  autoComplete="off"
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
          <div className="mt-4 flex justify-center">
            <button
              className="group w-full lg:w-1/3 md:w-2/3 py-2 px-4  border border-transparent text-sm leading-5 
                rounded-md text-white font-extrabold bg-purple-400 hover:bg-purple-500 focus:outline-none focus:border-purple-400 
                focus:shadow-outline-purple active:bg-purple-400 active:outline-none transition duration-150 ease-in-out bg-gradient-to-r from-red-600 to-pink-500 "
              onClick={(e) => {
                handleLogin(e, true)
              }}
            >
              Guest Login
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
