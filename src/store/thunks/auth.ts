import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { LoginResponse, LoginPayload } from "../../types/auth";

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

export { login };
