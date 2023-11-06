import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import CartPage from "./Pages/CartPage"
import CheckoutPage from './Pages/ChackoutPage'
import ProductPage from './Pages/ProductPage'
import {
  Route,BrowserRouter, Routes ,
  Link,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product-detail/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}
 
export default App;
