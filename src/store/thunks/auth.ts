import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import {
  AuthResponse,
  RegistrationPayload,
  LoginPayload,
  User,
} from "../../types/auth";
import { RootState } from "../store";

const login = createAsyncThunk<AuthResponse, LoginPayload>(
  "auth/login",
  async ({ email, password }) => {
    const { data } = await api.post<AuthResponse>("/auth/login", {
      email,
      password,
    });
    return data;
  }
);

const registration = createAsyncThunk<AuthResponse, RegistrationPayload>(
  "auth/registration",
  async ({ name, email, password }) => {
    const { data } = await api.post<AuthResponse>("/auth/register", {
      name,
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

export { login, registration, getProfile };
