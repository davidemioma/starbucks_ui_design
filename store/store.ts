import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: UiSlice.reducer,
  },
});

export const { setSidebarOpen, setHasAnAccount } = UiSlice.actions;

export default store;
