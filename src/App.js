import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import CartPage from "./Pages/CartPage"
import CheckoutPage from './Pages/ChackoutPage'
import ProductPage from './Pages/ProductPage'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Protected from "./features/Auth/components/Protected";
import { selectLoggedInUser } from './features/Auth/AuthSlice';
import { fetchItemsByUserIdAsync } from './features/Cart/CartSlice';
import {
  Route,BrowserRouter, Routes ,
} from "react-router-dom";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
    }
  },[dispatch, user])
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Protected><HomePage /></Protected>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/cart" element={<Protected><CartPage /></Protected>} />
          <Route path="/checkout" element={<Protected><CheckoutPage /></Protected>} />
          <Route path="/product-detail/:id" element={<Protected><ProductPage /></Protected>} />
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}
 
export default App;
