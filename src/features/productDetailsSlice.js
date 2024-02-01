import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils";
const initialState = {
  data: null,
  status: "idle",
};
const productDetailsSlice = createSlice({
  name: "productsDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "idle";
    });
  },
});

export const getProductDetails = createAsyncThunk(
  "productsDetail",
  async (productId) => {
    const data = await fetch(`${BASE_URL}/products/${productId}`);
    const result = await data.json();
    return result;
  }
);

export default productDetailsSlice.reducer;
