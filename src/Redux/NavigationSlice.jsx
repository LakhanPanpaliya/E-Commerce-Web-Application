import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
  currentView: "Inventory",
};
 
export const NavigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setView: (state, action) => {
      state.currentView = action.payload;
    },
  },
});
 
export const { setView } = NavigationSlice.actions;
export default NavigationSlice.reducer;
 
 