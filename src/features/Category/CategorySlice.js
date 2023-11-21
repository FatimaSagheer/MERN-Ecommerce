import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCategory,updateCategory} from './CategoryAPI';

const initialState = {
  status: 'idle',
  categories:[]
  
};
export const addCategoryAsync = createAsyncThunk(
  'category/addCategory',
  async (category) => {
    const response = await addCategory(category);
    // The value we return becomes the `fulfilled` action payload
  
    return response.data;
  }
);
export const updateCategoryAsync = createAsyncThunk(
  'order/updateOrder',
  async (order) => {
    const response = await updateCategory(order);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
// export const fetchAllOrdersAsync = createAsyncThunk(
//   'order/fetchAllOrders',
//   async ({sort, pagination}) => {
//     const response = await fetchAllOrders(sort,pagination);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
   

  },
  extraReducers: (builder) => {
    builder
      .addCase(addCategoryAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addCategoryAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories.push(action.payload)
        
      })
    //   .addCase(fetchAllOrdersAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(fetchAllOrdersAsync.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     state.orders = action.payload.orders;
    //     state.totalOrders = action.payload.totalOrders;
    //   })
      .addCase(updateCategoryAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCategoryAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index =  state.categories.findIndex(category=>category.id===action.payload.id)
        state.categories[index] = action.payload;
      })
   ;
  },
});


export default categorySlice.reducer;
