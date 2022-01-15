import { createContext, useContext, useEffect, useState } from "react"
import { getAllProducts } from "../Utils/NetworkCalls"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [productData, setProductData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      try {
        const { data, status } = await getAllProducts()

        if (status === 200) {
          setProductData(data.products)
          setIsLoading(false)
        }
      } catch (error) {
        setIsLoading(false)
        alert(error)
        console.log(error)
      }
    })()
  }, [])

  return (
    <DataContext.Provider
      value={{ productData, setProductData, isLoading, setIsLoading }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext)
