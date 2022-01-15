import { useFilter } from "../../context/FilterProvider"

export const Filter = () => {
  const { filterDispatch, filterState } = useFilter()

  return (
    <div className="p-7 bg-purple-200 h-screen w-[25vw] text-purple-800 ">
      <fieldset className="flex flex-col">
        {/* <label className="p-1">
          <input
            type="text"
            placeholder="Search.."
            className="focus-within:text-purple-600 placeholder-purple-500 outline-purple-700 border-4 border-purple-200"
            // onChange={(e) =>
            //   filterDispatch({ type: "SEARCH", payload: e.target.value })
            // }
          />
        </label> */}
        <label className="p-1">
          <input
            type="radio"
            name="sort"
            checked={filterState.sortBy === "lowtohigh"}
            onChange={() => filterDispatch({ type: "LOW_TO_HIGH" })}
            readOnly
            className="form-radio text-purple-300"
          />
          <span className="ml-2">Low to High</span>
        </label>
        <label className="p-1">
          <input
            type="radio"
            name="sort"
            className="form-radio text-purple-300"
            checked={filterState.sortBy === "hightolow"}
            onChange={() => filterDispatch({ type: "HIGH_TO_LOW" })}
            readOnly
          />
          <span className="ml-2">High to Low</span>
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            className="h-4 w-4 checked:bg-purple-500"
            checked={!filterState.showInventoryAll}
            onClick={() => filterDispatch({ type: "SHOW_INVENTORY_ALL" })}
          />
          <span className="ml-2"> Out of Stock</span>
        </label>
        <label className="p-1">
          <input
            type="checkbox"
            checked={filterState.fastdelivery}
            onClick={() => filterDispatch({ type: "FAST_DELIVERY" })}
            className="h-4 w-4 checked:bg-purple-500"
          />
          <span className="ml-2 capitalize">fast delivery only</span>
        </label>
        <label className="p-1">
          <input
            type="range"
            className="in-range:border-green-500"
            min={360}
            max={3000}
            step={10}
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_PRICE",
                payload: e.target.value,
              })
            }
          />
          {filterState.price > 0 && filterState.price}
        </label>
      </fieldset>
      <button
        className="block w-fit bg-purple-500 hover:bg-purple-600 text-white border-2 border-purple-500 hover:border-purple-600 px-3 py-2 rounded uppercase font-poppins font-medium"
        onClick={() => filterDispatch({ type: "CLEAR" })}
      >
        Clear Filter
      </button>
    </div>
  )
}
