import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth";
import saveState from "../utils/saveState";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
});

store.subscribe(() => {
  saveState({ jwt: store.getState()[authSlice.name].jwt }, "authData");
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
