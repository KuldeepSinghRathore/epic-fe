import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import { DataProvider } from "./context/DataProvider"
import { FilterProvider } from "./context/FilterProvider"
import { CartProvider } from "./context/CartProvider"
import { AuthProvider } from "./context/AuthProvider"
import { WishlistProvider } from "./context/WishListProvider"
import { AddressProvider } from "./context/AddressProvider"
import { OrderProvider } from "./context/OrderProvider"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <OrderProvider>
        <FilterProvider>
          <AddressProvider>
            <DataProvider>
              <WishlistProvider>
                <CartProvider>
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
                </CartProvider>
              </WishlistProvider>
            </DataProvider>
          </AddressProvider>
        </FilterProvider>
      </OrderProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
