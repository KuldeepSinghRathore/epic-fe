import { Route, Routes, useNavigate } from "react-router-dom"
import "./App.css"

import { Footer } from "./Components/Layout/Footer"
import { Navbar } from "./Components/Layout/Navbar"
import { useAuth } from "./context/AuthProvider"
import { CartPage } from "./Pages/CartPage"
import { HomePage } from "./Pages/HomePage"
import { LoginPage } from "./Pages/LoginPage"
import { LogOutPage } from "./Pages/LogOutPage"
import { NotFound } from "./Pages/NotFound"
import { ProductDetail } from "./Pages/ProductDetail"
import { ProductPage } from "./Pages/ProductPage"
import { RegisterPage } from "./Pages/RegisterPage"
import { WishlistPage } from "./Pages/WishlistPage"
import { PrivateRoutes } from "./Utils/PrivateRoutes"

function App() {
  return (
    <div className="h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}

        <Route
          path="/cart"
          element={
            <PrivateRoutes>
              <CartPage />
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

      <Footer />
    </div>
  )
}

export default App
