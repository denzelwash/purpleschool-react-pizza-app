import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user";
import saveState from "../utils/saveState";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
  },
});

store.subscribe(() => {
  saveState({ jwt: store.getState()[userSlice.name].jwt }, "userData");
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
