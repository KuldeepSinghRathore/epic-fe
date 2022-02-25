import axios from "axios"
import { createContext, useContext, useEffect, useReducer } from "react"
import { AddressReducer } from "../reducers/AddressReducer"
import { API } from "../Utils/API"
import { useAuth } from "./AuthProvider"

export const AddressContext = createContext()

export const AddressProvider = ({ children }) => {
  const [addressState, addressDispatch] = useReducer(AddressReducer, {
    address: [],

    selectedAddressId: "",
  })

  const { token, userId, setUserId, setToken, setIsLogin, isLogin } = useAuth()
  const fetchAddress = async (token) => {
    const { status, data } = await axios.get(`${API}/address/`, {
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
      addressDispatch({
        type: "LOAD_ADDRESS",
        payload: data.address,
      })
    }
  }

  //  useEffect to fetch address from server
  useEffect(() => {
    if (token && userId && isLogin) {
      fetchAddress(token)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, userId, isLogin])

  const values = { addressState, addressDispatch, fetchAddress }
  return (
    <AddressContext.Provider value={values}>{children}</AddressContext.Provider>
  )
}

export const useAddress = () => useContext(AddressContext)
