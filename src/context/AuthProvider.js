import { createContext, useContext, useState } from "react"
import axios from "axios"
import { useJwt } from "react-jwt"
export const AuthContext = createContext()
export const setUpAuthHeaders = (token) => {
  if (token) {
    return (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`)
  }

  delete axios.defaults.headers.common["Authorization"]
}
export function setupAuthExceptionHandler(logoutUser) {
  const UNAUTHORIZED = 401
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === UNAUTHORIZED) {
        logoutUser()
        window.location = "/login"
      }
      return Promise.reject(error)
    }
  )
}

export const AuthProvider = ({ children }) => {
  const {
    userId: savedUserId,
    token: savedToken,
    isLogin: savedIsLogin,
  } = JSON.parse(localStorage.getItem("userInfo")) || {
    userId: null,
    token: null,
    isLogin: false,
  }
  const [userId, setUserId] = useState(savedUserId)
  const [token, setToken] = useState(savedToken)
  const [isLogin, setIsLogin] = useState(savedIsLogin)
  const { isExpired } = useJwt(token)

  const logoutUser = () => {
    localStorage.removeItem("userInfo")
    setUserId(null)
    setToken(null)
    setIsLogin(false)
  }
  setupAuthExceptionHandler(logoutUser)

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
        isExpired,
        userId,
        setUserId,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
