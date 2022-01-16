import axios from "axios"
import { createContext, useContext, useEffect, useReducer } from "react"
import { useJwt } from "react-jwt"
import { Navigate, useNavigate } from "react-router-dom"
import { CartReducer } from "../reducers/CartReducer"
import { API } from "../Utils/API"
import { useAuth } from "./AuthProvider"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, { cart: [] })
  const { token, userId, setUserId, setToken, setIsLogin, isLogin } = useAuth()

  // useEffect(() => {
  //   ;(async () => {
  //     try {
  //       if (token && userId && isLogin) {
  //         const response = await axios.get(`${API}/cart/${userId}`, {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         })
  //         console.log("responseDataCartItems", response.data.cart.cartItems)
  //         if (response.status === 401) {
  //           setIsLogin(false)
  //           setToken(null)
  //           setUserId(null)
  //           localStorage.removeItem("userInfo")
  //         }
  //         if (response.status === 200) {
  //           cartDispatch({
  //             type: "LOAD_CART",
  //             payload: response.data.cart.cartItems,
  //           })
  //         }
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })()
  // }, [token, userId, isLogin])
  // const getCartFromServer = async (userId, token) => {
  //   try {
  //     const { status, data } = await axios.get(`${API}/cart/${userId}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })

  //     if (status === 401) {
  //       setIsLogin(false)
  //       setToken(null)
  //       setUserId(null)
  //       localStorage.removeItem("userInfo")
  //     }
  //     if (status === 200) {
  //       cartDispatch({
  //         type: "LOAD_CART",
  //         payload: data.cart.cartItems,
  //       })
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     const { status, data } = error.response
  //     if (status !== 200) {
  //       console.log(data.message)
  //     }
  //   }
  // }
  // useEffect(() => {
  //   if (isLogin && userId && token) {
  //     getCartFromServer(userId, token)
  //   }
  // }, [isLogin, userId, token])

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
