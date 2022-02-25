import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"
import { useCartContext } from "../context/CartProvider"
import { useOrder } from "../context/OrderProvider"
import { useWishListContext } from "../context/WishListProvider"

export const LogOutPage = () => {
  const { setUserId, setToken, setIsLogin } = useAuth()
  const { orderData, setOrderData } = useOrder()
  const { cartDispatch } = useCartContext()
  const { wishlistDispatch } = useWishListContext()
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem("userInfo")
    setUserId(null)
    setToken(null)
    setOrderData({
      orders: [],
    })
    cartDispatch({ type: "CLEAR_SESSION" })
    wishlistDispatch({ type: "CLEAR_SESSION" })
    setIsLogin(false)
    navigate("/")
  }

  return (
    <div className="mx-auto w-fit   flex flex-col ">
      <h1 className="font-extrabold  mt-10 ">Want To Logout Out!!</h1>
      <button
        className="bg-purple-500 mb-10  mt-10 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogOut}
      >
        Log Out
      </button>
      <button
        className="bg-purple-500 mb-10 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/")}
      >
        Home
      </button>
      {orderData.orders.length !== 0 && (
        <button
          className="bg-purple-500 mb-10 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/orders")}
        >
          Orders
        </button>
      )}
      <button
        className="bg-purple-500 mb-10 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/product")}
      >
        Shop
      </button>
    </div>
  )
}
