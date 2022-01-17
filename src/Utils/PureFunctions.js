// Product Listing
export const getSortedData = (arr, sortBy) => {
  if (!sortBy) return arr
  if (sortBy === "lowtohigh") {
    return arr.sort((a, b) => a.price - b.price)
  }
  if (sortBy === "hightolow") {
    return arr.sort((a, b) => b.price - a.price)
  }
}

export const getFilteredData = (
  arr,
  { fastdelivery, showInventoryAll, price, searchQuery }
) => {
  price = Number(price)
  searchQuery = searchQuery.toLowerCase()

  const result = arr
    .filter((item) => (fastdelivery ? item.fastDelivery : item))
    .filter((filtered) => (showInventoryAll ? true : filtered.inStock))
    .filter((i) =>
      searchQuery ? i.name.toLowerCase().includes(searchQuery) : true
    )
  if (price !== 0) {
    return result.filter((byPrice) => (price ? byPrice.price < price : true))
  }
  return result
}

// Home Page Collections
export const FilterCollections = (arr, selectedGender) => {
  return arr.filter((product) => product.gender === selectedGender)
}

// cart and wishlist
export const isAlreadyExist = (id, cartToCheck) => {
  const isExist = cartToCheck.findIndex((item) => item?.product?._id === id)
  if (isExist === -1) {
    return false
  }

  return true
}
