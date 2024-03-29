import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    addProduct: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity += 1
      }
    },
    removeItem: (state,action) => {
      state.products=state.products.filter(item=>item.id !== action.payload)
    },
    removeProduct: (state, action) => {
      const remove = state.products.find((item) => item.id === action.payload.id)
      if (remove.quantity > 0) {
        remove.quantity -= 1
      }
      
    },
    resetCart: (state) => {
      state.products = []
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,addProduct,removeProduct,removeItem,resetCart } = cartSlice.actions;

export default cartSlice.reducer;