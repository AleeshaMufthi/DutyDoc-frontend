import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,   
  firstName: null,
  lastName: null,
  email: null,
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {

      console.log("Dispatched action from userslice:", action.payload);
      state.userId = action.payload.userId;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.loggedIn = true;
    },
    clearUser(state) {
      state.userId = null;
      state.firstName = null;
      state.lastName = null;
      state.email = null;
      state.loggedIn = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;