import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const cart = state.data.find((item) => item.id === action.payload.id);
      if (cart) {
        cart.quantity += 1;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },
    remove: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
