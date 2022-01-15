import { Route, Routes } from "react-router-dom"
import "./App.css"

import { Footer } from "./Components/Layout/Footer"
import { Navbar } from "./Components/Layout/Navbar"
import { CartPage } from "./Pages/CartPage"
import { HomePage } from "./Pages/HomePage"
import { LoginPage } from "./Pages/LoginPage"
import { ProductDetail } from "./Pages/ProductDetail"
import { ProductPage } from "./Pages/ProductPage"
import { RegisterPage } from "./Pages/RegisterPage"
import { WishlistPage } from "./Pages/WishlistPage"

function App() {
  return (
    <div className="h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
