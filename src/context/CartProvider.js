import axios from "axios"
import { createContext, useContext, useEffect, useReducer } from "react"

import { CartReducer } from "../reducers/CartReducer"
import { API } from "../Utils/API"
import { useAuth } from "./AuthProvider"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, { cart: [] })
  const { token, userId, setUserId, setToken, setIsLogin, isLogin } = useAuth()

  useEffect(() => {
    if (isLogin && userId && token) {
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
          if (status !== 200) {
            console.log(data.message)
          }
        }
      }
      getCartFromServer(userId, token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin, userId, token])

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)
