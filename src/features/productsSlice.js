import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils";

const initialState = {
  datas: null,
};
const productsSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductList.fulfilled, (state, action) => {
      state.datas = action.payload;
    });
  },
});

export const getProductList = createAsyncThunk("productsList", async () => {
  const datas = await fetch(`${BASE_URL}/products`);
  const results = await datas.json();
  return results;
});
export default productsSlice.reducer;
