import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/ChackoutPage";
import ProductPage from "./Pages/ProductPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Protected from "./features/Auth/components/Protected";
import { selectLoggedInUser } from "./features/Auth/AuthSlice";
import { fetchItemsByUserIdAsync } from "./features/Cart/CartSlice";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PageNotFound from "./Pages/DeafultPage";
import OredrSuccessPage from "./Pages/OrderSuccessPage";
import Carosel from "./Pages/CaroselPage";
import UserOrderPage from "./Pages/UserOrderPage";
import UserProfilePage from "./Pages/UserProfile";
import Logout from "./features/Auth/components/Logout";
import ForgotPasswordPage from "./Pages/ForgetPasswordPage";
import ProtectedAdmin from "./features/Auth/components/ProtectedAdmin";
import AdminHome from "./Pages/AdminHome";
import AdminProductDetailPage from "./Pages/AdminProductDetail";
import AdminProductFormPage from "./Pages/AdminProductForm";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }
  }, [dispatch, user]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <HomePage />
              </Protected>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedAdmin>
                <AdminHome></AdminHome>
              </ProtectedAdmin>
            }
          />
          <Route
            path="/admin/product-form"
            element={
              <ProtectedAdmin>
                <AdminProductFormPage></AdminProductFormPage>
              </ProtectedAdmin>
            }
          />
          <Route
            path="/cart"
            element={
              <Protected>
                <CartPage />
              </Protected>
            }
          />
          <Route
            path="/checkout"
            element={
              <Protected>
                <CheckoutPage />
              </Protected>
            }
          />
          <Route
            path="/product-detail/:id"
            element={
              <Protected>
                <ProductPage />
              </Protected>
            }
          />
          <Route
            path="/admin/product-detail/:id"
            element={
              <ProtectedAdmin>
                <AdminProductDetailPage></AdminProductDetailPage>
              </ProtectedAdmin>
            }
          />
          <Route
           path= '/admin/product-form/edit/:id'
           element= {
            <ProtectedAdmin>
            <AdminProductFormPage></AdminProductFormPage>
          </ProtectedAdmin>
           }
            
          />
          <Route path="/orders" element={<UserOrderPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forget-password" element={<ForgotPasswordPage />} />
          <Route path="/order-success/:id" element={<OredrSuccessPage />} />
          <Route path="/car" element={<Carosel />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
