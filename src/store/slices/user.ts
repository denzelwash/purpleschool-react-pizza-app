import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import loadState from "../../utils/loadState";

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
    setJwt: (state, action: PayloadAction<string>) => {
      state.jwt = action.payload;
    },
    logout: (state) => {
      state.jwt = null;
    },
  },
});

export default userSlice;
export const { setJwt, logout } = userSlice.actions;
