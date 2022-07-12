import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counterSlice"
import postReducer from "../redux/features/postSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer
  }
})
