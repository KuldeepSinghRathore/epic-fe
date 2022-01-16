import { useJwt } from "react-jwt"
import { Navigate, Route, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"

export const PrivateRoutes = ({ children }) => {
  const { token } = useAuth()
  let location = useLocation()
  const { isExpired } = useJwt(token)
  if (isExpired) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}
