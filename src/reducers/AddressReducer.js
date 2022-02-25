export const AddressReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_ADDRESS":
      return { ...state, address: action.payload }
    case "SETID":
      return { ...state, selectedAddressId: action.payload }
    case "ADD_TO_ADDRESS":
      return {
        ...state,
        address: [...state.address, action.payload],
      }
    case "REMOVE_FROM_ADDRESS":
      return {
        ...state,
        address: state.address.filter((item) => item._id !== action.payload),
      }
    case "UPDATE_ADDRESS":
      return {
        ...state,
        address: state.address.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      }

    case "CLEAR_SESSION":
      return {
        address: [],
        selectedAddress: {},
        selectedAddressId: "",
      }
    default:
      return state
  }
}
