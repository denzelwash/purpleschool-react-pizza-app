import { createSlice } from "@reduxjs/toolkit";
import loadState from "../../utils/loadState";
import { getProfile, login, registration } from "../thunks/auth";
import { AuthStatus, User } from "../../types/auth";

interface authState {
  jwt: string | null;
  user: User | null;
  authStatus: AuthStatus;
}

const initialState: authState = {
  jwt: loadState<authPersistentState>("authData")?.jwt ?? null,
  user: null,
  authStatus: AuthStatus.Unknown,
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
      state.user = null;
      state.authStatus = AuthStatus.NoAuth;
    },
    setAuthStatus: (state, { payload }) => {
      state.authStatus = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.jwt = action.payload.access_token;
    });
    builder.addCase(registration.fulfilled, (state, action) => {
      state.jwt = action.payload.access_token;
    });
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authStatus = AuthStatus.Auth;
    });
    builder.addCase(getProfile.rejected, (state) => {
      state.jwt = null;
      state.user = null;
      state.authStatus = AuthStatus.NoAuth;
    });
  },
});

export default authSlice;
export const { logout, setAuthStatus } = authSlice.actions;
