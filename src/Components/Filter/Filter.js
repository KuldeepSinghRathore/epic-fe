import { useFilter } from "../../context/FilterProvider"

export const Filter = () => {
  const { filterDispatch, filterState } = useFilter()

  return (
    <div className="p-7 bg-purple-200 h-screen  md:w-[25vw] text-purple-800 ">
      <fieldset className="flex flex-col">
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="sort"
            onChange={() => filterDispatch({ type: "LOW_TO_HIGH" })}
            defaultChecked={filterState.sortBy === "lowtohigh"}
            className="form-radio text-purple-300"
          />
          <label className="p-1 ">Low to High</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="sort"
            className="form-radio text-purple-300"
            onChange={() => filterDispatch({ type: "HIGH_TO_LOW" })}
            defaultChecked={filterState.sortBy === "hightolow"}
          />
          <label className="p-1">High to Low</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            className="h-4 w-4 checked:bg-purple-500"
            defaultChecked={!filterState.showInventoryAll}
            onClick={() => filterDispatch({ type: "SHOW_INVENTORY_ALL" })}
          />
          <label htmlFor="">Out of Stock</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            defaultChecked={filterState.fastdelivery}
            onClick={() => filterDispatch({ type: "FAST_DELIVERY" })}
            className="h-4 w-4 checked:bg-purple-500"
          />
          <label className="p-1 capitalize">fast delivery only</label>
        </div>

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
        className="block w-fit bg-purple-500 hover:bg-purple-600 text-white border-2 border-purple-500 hover:border-purple-600 px-3 py-2 rounded uppercase font-poppins font-medium whitespace-nowrap"
        onClick={() => filterDispatch({ type: "CLEAR" })}
      >
        Clear Filter
      </button>
    </div>
  )
}
