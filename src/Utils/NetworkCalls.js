import { API } from "../Utils/API"
import axios from "axios"
import { toast } from "react-toastify"
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API}/api/products`)
    return response
  } catch (error) {
    console.log(error)
  }
}
export const addToCartServer = async (productId, userId, token) => {
  try {
    const { status } = await axios.post(
      `${API}/cart/${userId}`,
      {
        productId,
        quantity: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return status
  } catch (error) {
    console.log(error)
  }
}
export const removeFromCartServer = async (productId, userId, token) => {
  try {
    const { status } = await axios.delete(
      `${API}/cart/${userId}/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return status
  } catch (error) {
    console.log(error)
  }
}

export const increaseQuantityServer = async (
  productId,
  userId,
  token,
  quantity
) => {
  try {
    const { status } = await axios.post(
      `${API}/cart/${userId}/${productId}`,
      {
        quantityValue: quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return status
  } catch (error) {
    console.log(error)
  }
}

export const decreaseQuantityServer = async (
  productId,
  userId,
  token,
  quantity
) => {
  try {
    const { status } = await axios.post(
      `${API}/cart/${userId}/${productId}`,
      {
        quantityValue: quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return status
  } catch (error) {
    console.log(error)
  }
}
// wishlist
export const getwishlistServer = async (userId, token) => {
  try {
    const response = await axios.get(`${API}/wishlist/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  } catch (error) {
    if (error?.response?.status !== 404) {
      console.log(error)
    }
  }
}

export const addTowishlistServer = async (productId, userId, token) => {
  try {
    const { status } = await axios.post(
      `${API}/wishlist/${userId}/${productId}`,
      {
        productId,
      },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return status
  } catch (error) {
    console.log(error)
  }
}

export const removeFromwishlistServer = async (productId, userId, token) => {
  try {
    const { status } = await axios.delete(
      `${API}/wishlist/${userId}/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return status
  } catch (error) {
    console.log(error)
  }
}

// Using Above And Making New Functions
export const removeFromwishlist = async (
  productId,
  userId,
  token,
  dispatch,
  navigate
) => {
  if (token) {
    toast("🦄 Remove From Wishlist!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    const status = await removeFromwishlistServer(productId, userId, token)
    if (status === 200) {
      dispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: productId,
      })
    }
  } else {
    navigate("/login")
  }
}
export const addToCart = async (
  productId,
  userId,
  token,
  item,
  dispatch,
  navigate
) => {
  if (token) {
    toast("🦄 Add to Cart!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    const status = await addToCartServer(productId, userId, token, item)

    if (status === 200) {
      dispatch({ type: "ADD_TO_CART", payload: item })
    }
  } else {
    navigate("/login")
  }
}
export const removeFromCart = async (
  productId,
  userId,
  token,
  dispatch,
  navigate
) => {
  if (token) {
    toast("🦄 Remove From Cart!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    const status = await removeFromCartServer(productId, userId, token)
    if (status === 200) {
      dispatch({ type: "REMOVE_FROM_CART", payload: productId })
    }
  } else {
    navigate("/login")
  }
}

export const increaseQuantity = async (
  productId,
  userId,
  token,
  item,
  navigate,
  dispatch
) => {
  const quantity = item?.quantity + 1
  if (token) {
    const status = await increaseQuantityServer(
      productId,
      userId,
      token,
      quantity
    )
    if (status === 200) {
      dispatch({
        type: "INCREASE_QUANTITY",
        payload: productId,
      })
    }
  } else {
    navigate("/login")
  }
}
export const decreaseQuantity = async (
  productId,
  userId,
  token,
  item,
  navigate,
  dispatch
) => {
  const quantity = item?.quantity - 1
  if (quantity > 0) {
    if (token) {
      const status = await decreaseQuantityServer(
        productId,
        userId,

        token,
        quantity
      )

      if (status === 200) {
        dispatch({
          type: "DECREASE_QUANTITY",
          payload: productId,
        })
      }
    } else {
      navigate("/login")
    }
  }
}

export const addTowishlist = async (
  productId,
  userId,
  token,
  item,
  dispatch,
  navigate
) => {
  if (token) {
    const status = await addTowishlistServer(productId, userId, token, item)
    if (status === 200) {
      dispatch({
        type: "ADD_TO_WISHLIST",
        payload: item,
      })
    }
  } else {
    navigate("/login")
  }
}
