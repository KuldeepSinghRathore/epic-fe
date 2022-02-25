import { Route, Routes } from "react-router-dom"
import "./App.css"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { Footer } from "./Components/Layout/Footer"
import { Navbar } from "./Components/Layout/Navbar"
import { Loading } from "./Components/Loading/Loading"
import { useData } from "./context/DataProvider"
import { CartPage } from "./Pages/CartPage"
import { CheckOutPage } from "./Pages/CheckOutPage"
import { HomePage } from "./Pages/HomePage"
import { LoginPage } from "./Pages/LoginPage"
import { LogOutPage } from "./Pages/LogOutPage"
import { NotFound } from "./Pages/NotFound"
import { ProductDetail } from "./Pages/ProductDetail"
import { ProductPage } from "./Pages/ProductPage"
import { RegisterPage } from "./Pages/RegisterPage"
import { WishlistPage } from "./Pages/WishlistPage"
import { PrivateRoutes } from "./Utils/PrivateRoutes"
import { OrderHistoryPage } from "./Pages/OrderHistoryPage"

function App() {
  const { productData } = useData()
  if (productData.length === 0)
    return (
      <div className="bg-purple-100">
        <Loading />
      </div>
    )
  return (
    <>
      <div className="h-[88vh] mx-auto select-none bg-purple-100 ">
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:productId" element={<ProductDetail />} />

          <Route
            path="/cart"
            element={
              <PrivateRoutes>
                <CartPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/wishlist"
            element={
              <PrivateRoutes>
                <WishlistPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/orders"
            element={
              <PrivateRoutes>
                <OrderHistoryPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/checkout"
            element={
              <PrivateRoutes>
                <CheckOutPage />
              </PrivateRoutes>
            }
          />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route
            path="/logout"
            element={
              <PrivateRoutes>
                <LogOutPage />
              </PrivateRoutes>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
