const { createContext, useReducer, useContext, useState } = require("react")

const FilterContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: "lowtohigh" }

    case "HIGH_TO_LOW":
      return { ...state, sortBy: "hightolow" }

    case "FAST_DELIVERY":
      return { ...state, fastdelivery: !state.fastdelivery }

    case "SHOW_INVENTORY_ALL":
      return { ...state, showInventoryAll: !state.showInventoryAll }
    case "FILTER_BY_PRICE":
      return { ...state, price: action.payload }
    case "SEARCH":
      return { ...state, searchQuery: action.payload }

    case "CLEAR":
      return {
        sortBy: "",
        fastdelivery: false,
        showInventoryAll: true,
        price: 0,
        searchQuery: "",
      }

    default:
      return state
  }
}

export const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(reducer, {
    sortBy: "",
    fastdelivery: false,
    showInventoryAll: true,
    price: 0,
    searchQuery: "",
  })
  const [toggle, setToggle] = useState(false)

  return (
    <FilterContext.Provider
      value={{ filterDispatch, filterState, toggle, setToggle }}
    >
      {children}
    </FilterContext.Provider>
  )
}
export const useFilter = () => useContext(FilterContext)
