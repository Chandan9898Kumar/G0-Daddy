import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  isLoading: true,
  isError: "",
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProductData(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { fetchProductData } = ProductSlice.actions;

export default ProductSlice.reducer;
