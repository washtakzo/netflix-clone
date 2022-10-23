import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    login: (state, action) => {
      console.log({ state });
      console.log({ action });
      state.user = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
