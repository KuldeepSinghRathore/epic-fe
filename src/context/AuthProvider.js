import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"
import { useJwt } from "react-jwt"
export const AuthContext = createContext()
export const setUpAuthHeaders = (token) => {
  if (token) {
    return (axios.defaults.headers.common["Authorization"] = token)
  }

  delete axios.defaults.headers.common["Authorization"]
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

  // useEffect(() => {
  //   console.log(
  //     { isExpired },
  //     "from auth provider",
  //     { isLogin },
  //     "from auth provider"
  //   )
  // }, [isExpired, isLogin])

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
