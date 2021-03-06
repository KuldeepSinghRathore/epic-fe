import { createContext, useContext, useEffect, useReducer } from "react"
import { WishListReducer } from "../reducers/WishListReducer"
import { getwishlistServer } from "../Utils/NetworkCalls"
import { useAuth } from "./AuthProvider"

export const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(WishListReducer, {
    wishlist: [],
  })
  const { token, userId } = useAuth()
  useEffect(() => {
    ;(async () => {
      try {
        if (token && userId) {
          const response = await getwishlistServer(userId, token)

          if (response?.status === 200) {
            wishlistDispatch({
              type: "LOAD_WISHLIST",
              payload: response.data.wishlist.wishlistItems,
            })
          }
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }, [token, userId])

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishListContext = () => useContext(WishlistContext)
