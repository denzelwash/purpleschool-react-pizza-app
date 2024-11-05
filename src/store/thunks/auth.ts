import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { LoginResponse, LoginPayload, User } from "../../types/auth";
import { RootState } from "../store";

const login = createAsyncThunk<LoginResponse, LoginPayload>(
  "auth/login",
  async ({ email, password }) => {
    const { data } = await api.post<LoginResponse>("/auth/login", {
      email,
      password,
    });
    return data;
  }
);

const getProfile = createAsyncThunk<User, void, { state: RootState }>(
  "auth/getProfile",
  async (_, { getState }) => {
    const jwt = getState().auth.jwt;
    const { data } = await api.get<User>("/user/profile", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return data;
  }
);

export { login, getProfile };
