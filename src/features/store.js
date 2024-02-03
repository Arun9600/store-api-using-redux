import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import productDetailsSlice from "./productDetailsSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    productsList: productsSlice,
    productsDetail: productDetailsSlice,
    cart: cartSlice,
  },
});

export default store;
