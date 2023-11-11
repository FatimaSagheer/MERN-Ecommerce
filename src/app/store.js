import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productListSlice';
import authReducer from "../features/Auth/AuthSlice"
import cartReducer from "../features/Cart/CartSlice"
import orderReducer from "../features/Order/OrderSlice"
import userReducer from "../features/User/UserSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth:authReducer,
    cart:cartReducer,
    order:orderReducer,
    user: userReducer,
  },
});
