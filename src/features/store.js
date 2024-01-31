import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    productsList: productsSlice,
  },
});

export default store;
