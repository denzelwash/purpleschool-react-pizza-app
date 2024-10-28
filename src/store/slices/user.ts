import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  jwt: string | null;
}

const initialState: UserState = {
  jwt: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setJwt: (state) => {
      state.jwt = "xxx";
    },
    logout: (state) => {
      state.jwt = null;
    },
  },
});

export default userSlice;
