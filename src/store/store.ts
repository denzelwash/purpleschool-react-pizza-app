import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
