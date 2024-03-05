import todoSlice from "./todo";
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
})