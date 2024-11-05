export interface LoginResponse {
  access_token: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  passwordHash: string;
  address: string;
  name: string;
  restoreToken: any;
  phone: string;
}

export enum AuthStatus {
  Auth = "Auth",
  NoAuth = "NoAuth",
  Unknown = "Unknown",
}
