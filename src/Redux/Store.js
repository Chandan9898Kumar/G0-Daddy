import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductRedux/ProductRedux";
import ProductDetailsReducer from "./ProductRedux/ProductDetailsRedux";
const Store = configureStore({
  reducer: {
    Product: ProductReducer,
    ProductDetails: ProductDetailsReducer,
  },
});

export default Store;
