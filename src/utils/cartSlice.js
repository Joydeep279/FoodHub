import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["temp"],
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action);
      console.log(state);
      state.items.push(action.payload);
    },
    clearCart: () => {
      state.item = [];
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
  },
});
console.log(cartSlice);
export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
