import { createSlice } from "@reduxjs/toolkit";
import loadState from "../../utils/loadState";
import { login } from "../thunks/auth";

interface authState {
  jwt: string | null;
}

const initialState: authState = {
  jwt: loadState<authPersistentState>("authData")?.jwt ?? null,
};

interface authPersistentState {
  jwt: string | null;
}

export const authSlice = createSlice({
  name: "auth",
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

export default authSlice;
export const { logout } = authSlice.actions;
