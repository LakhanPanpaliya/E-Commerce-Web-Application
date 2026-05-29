import { configureStore } from "@reduxjs/toolkit";
import NavigationReducer from "./NavigationSlice";
import ProductReducer from "./ProductsStore"; 

export const store = configureStore({
  reducer: {
    navigation: NavigationReducer,
    Product: ProductReducer, 
  },
});