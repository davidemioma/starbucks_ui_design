import { createSlice } from "@reduxjs/toolkit";

const UiSlice = createSlice({
  name: "mail",
  initialState: {
    sidebarOpen: false,
    hasAnAccount: true,
  },
  reducers: {
    setSidebarOpen(state, action) {
      state.sidebarOpen = action.payload;
    },

    setHasAnAccount(state, action) {
      state.hasAnAccount = action.payload;
    },
  },
});

export default UiSlice;
