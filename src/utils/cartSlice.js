import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["Tea", "Coffe"],
  },
  reducers: {
    addItem: (state, action) => {
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
