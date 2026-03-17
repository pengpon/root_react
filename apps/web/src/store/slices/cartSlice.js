import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart, fetchCarts } from '../../api/cart';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartList: [],
    totalQuantity: 0,
    finalTotal: 0,
  },
  reducers: {
    setCart: (state, action) => {
      state.cartList = action.payload.carts;
      state.totalQuantity = action.payload.carts.reduce((total, item) => total + item.qty, 0);
      state.finalTotal = action.payload.final_total;
    },
    setDrawerOpen: (state, action) => {
      state.isDrawerOpen = action.payload;
    },
  },
});

export const getCartAsync = createAsyncThunk('cart/getCartAsync', async (_, params) => {
  const res = await fetchCarts();
  params.dispatch(setCart(res.data.data));
});

export const addToCartAsync = createAsyncThunk('cart/addToCart', async (product, { dispatch }) => {
  await addToCart(product);
  dispatch(getCartAsync());
});

export const { setCart, setDrawerOpen } = cartSlice.actions;
export default cartSlice.reducer;
