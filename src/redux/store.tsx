import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
