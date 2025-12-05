import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slices/CartSlices";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});
