import { useEffect } from "react"
import { useJwt } from "react-jwt"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import { useCartContext } from "../context/CartProvider"
import { useWishListContext } from "../context/WishListProvider"

export const LogOutPage = () => {
  const { setUserId, setToken, setIsLogin } = useAuth()
  const { isExpired } = useJwt()
  const { cartDispatch } = useCartContext()
  const { wishlistDispatch } = useWishListContext()
  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem("userInfo")
    setUserId(null)
    setToken(null)

    cartDispatch({ type: "CLEAR_SESSION" })
    wishlistDispatch({ type: "CLEAR_SESSION" })
    setIsLogin(false)
    navigate("/")
  }

  return (
    <div className="mx-auto w-4/5 ">
      <h1>Want To Logout Out!!</h1>
      <button
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  )
}
