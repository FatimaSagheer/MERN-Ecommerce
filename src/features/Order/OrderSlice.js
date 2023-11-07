import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addOrder } from './OrderAPI';

const initialState = {
  orders: [],
  status: 'idle',
};
export const addOrderAsync = createAsyncThunk(
  'order/addOrder',
  async (order) => {
    const response = await addOrder(order);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
// export const fetchItemsByUserIdAsync = createAsyncThunk(
//   'cart/fetchItemsByUserId',
//   async (userId) => {
//     const response = await fetchItemsByUserId(userId);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );
// export const updateCartAsync = createAsyncThunk(
//   'cart/updateCart',
//   async (update) => {
//     const response = await updateCart(update);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

// export const deleteItemFromCartAsync = createAsyncThunk(
//   'cart/deleteItemFromCart',
//   async (itemId) => {
//     const response = await deleteItemFromCart(itemId);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// ); 
export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders.push(action.payload)
      })
   ;
  },
});


export const selectItems = (state) => state.cart.items;
export default orderSlice.reducer;
