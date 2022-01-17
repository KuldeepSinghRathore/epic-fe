export const WishListReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_WISHLIST":
      return { ...state, wishlist: action.payload }

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [
          ...state.wishlist,
          { product: { ...action.payload }, quantity: 1 },
        ],
      }
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.product._id !== action.payload
        ),
      }
    case "CLEAR_SESSION":
      return {
        ...state,
        wishlist: [],
      }
    default:
      return state
  }
}
