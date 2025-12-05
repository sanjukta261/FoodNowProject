import { createSlice } from "@reduxjs/toolkit";

const CartSlices = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { item, quantity, timeSlot, addition } = action.payload;

      const existing = state.items.find(
        (cartItem) =>
          cartItem.item.id === item.id &&
          cartItem.timeSlot === timeSlot &&
          cartItem.addition === addition
      );

      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ item, quantity, timeSlot, addition });
      }
    },

    removeFromCart: (state, action) => {
      state.items.splice(action.payload, 1);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = CartSlices.actions;
export default CartSlices.reducer;
