import { configureStore } from "@reduxjs/toolkit";
import NavigationReducer from "./NavigationSlice";
import ProductReducer from "./ProductsStore";
// import ProductAPI from "./ProductAPI";

export const store = configureStore({
  reducer: {
    navigation: NavigationReducer,
    Product: ProductReducer,
    // ProductAPI : ProductAPIReducer,
  },
});