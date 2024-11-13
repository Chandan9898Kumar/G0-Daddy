import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetailsData: {},
  isLoading: true,
  isError: "",
};

const ProductDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    fetchProductDetails(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { fetchProductDetails } = ProductDetailsSlice.actions;

export default ProductDetailsSlice.reducer;
