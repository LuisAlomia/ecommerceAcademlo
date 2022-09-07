import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: "",
  reducers: {
    setToken: (state, action) => action.payload,
  },
});

export const { setToken } = loginSlice.actions;

export default loginSlice.reducer;
