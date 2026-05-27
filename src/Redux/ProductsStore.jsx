import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",

  initialState,

  reducers: {
    // Loading
    fetchPending: (state) => {
      state.loading = true;
      state.error = null;
    },

    // Success
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },

    // Error
    fetchError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Add To Cart
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    // Remove From Cart
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.id !== action.payload
      );
    },

    // Increment
    incrementQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      } 
      
    },

    // Decrement
    decrementQuantity: (state, action) => {
      const item = state.cart.find(
        (item) => item.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter(
          (item) => item.id !== action.payload
        );
      }
    },
  },
});

export const {
  fetchPending,
  fetchSuccess,
  fetchError,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = productSlice.actions;

export default productSlice.reducer;


// API Function
export const getProducts = () => async (dispatch) => {
  try {
    dispatch(fetchPending());

    const response = await fetch(
      "https://fakestoreapi.com/products"
    );

    const data = await response.json();

    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};