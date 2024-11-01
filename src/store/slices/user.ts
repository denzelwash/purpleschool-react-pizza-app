import { createSlice } from "@reduxjs/toolkit";
import loadState from "../../utils/loadState";
import { login } from "../thunks/user";

interface UserState {
  jwt: string | null;
}

const initialState: UserState = {
  jwt: loadState<UserPersistentState>("userData")?.jwt ?? null,
};

interface UserPersistentState {
  jwt: string | null;
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.jwt = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.jwt = action.payload.access_token;
    });
    // .addCase(login.rejected, (state, action) => {});
  },
});

export default userSlice;
export const { logout } = userSlice.actions;
