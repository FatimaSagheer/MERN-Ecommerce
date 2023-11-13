import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addOrder,fetchAllOrders,updateOrder } from './OrderAPI';

const initialState = {
  orders: [],
  status: 'idle',
  currentOrder:null
};
export const addOrderAsync = createAsyncThunk(
  'order/addOrder',
  async (order) => {
    const response = await addOrder(order);
    // The value we return becomes the `fulfilled` action payload
  
    return response.data;
  }
);
export const updateOrderAsync = createAsyncThunk(
  'order/updateOrder',
  async (order) => {
    const response = await updateOrder(order);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchAllOrdersAsync = createAsyncThunk(
  'order/fetchAllOrders',
  async ({sort, pagination}) => {
    const response = await fetchAllOrders(sort,pagination);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    resetOrder: (state) => {
        state.currentOrder = null;
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
        state.currentOrder=action.payload
      })
      .addCase(fetchAllOrdersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllOrdersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.orders = action.payload.orders;
        state.totalOrders = action.payload.totalOrders;
      })
      .addCase(updateOrderAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateOrderAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index =  state.orders.findIndex(order=>order.id===action.payload.id)
        state.orders[index] = action.payload;
      })
   ;
  },
});


export const selectItems = (state) => state.cart.items;
export const selectOrders = (state) => state.order.orders;
export const selectCurrentOrder = (state) => state.order.currentOrder;
export const { resetOrder } = orderSlice.actions;
export const selectTotalOrders = (state) => state.order.totalOrders;
export default orderSlice.reducer;
