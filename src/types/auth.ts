export interface LoginResponse {
  access_token: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
