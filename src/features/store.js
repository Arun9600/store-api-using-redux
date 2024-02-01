import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import productDetailsSlice from "./productDetailsSlice";

const store = configureStore({
  reducer: {
    productsList: productsSlice,
    productsDetail: productDetailsSlice,
  },
});

export default store;
