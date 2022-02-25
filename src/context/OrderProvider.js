import axios from "axios"
import { createContext, useState, useEffect } from "react"
import { useContext } from "react"
import { API } from "../Utils/API"
import { setUpAuthHeaders, useAuth } from "./AuthProvider"
export const OrderContext = createContext()

export const OrderProvider = ({ children }) => {
  const [orderData, setOrderData] = useState({
    orders: [],
  })
  const [isOrder, setIsOrder] = useState(false)
  const { token } = useAuth()

  useEffect(() => {
    if (token) {
      const getUsersById = async (token) => {
        try {
          const { status, data } = await axios.get(
            `${API}/order`,
            setUpAuthHeaders(token)
          )
          if (status === 200) {
            setOrderData({ ...orderData, orders: data.orders })
          }
        } catch (error) {
          console.log(error)
        }
      }
      getUsersById(token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, isOrder])

  return (
    <OrderContext.Provider value={{ orderData, setIsOrder, setOrderData }}>
      {children}
    </OrderContext.Provider>
  )
}

export const useOrder = () => useContext(OrderContext)
