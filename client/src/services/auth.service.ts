import api from "../lib/axios";
import type {
  LoginPayload,
  RegisterPayload,
  AuthResponse,
} from "../types/auth";

export const authService = {
  login: async (
    payload: LoginPayload
  ) => {
    const { data } =
      await api.post<AuthResponse>(
        "/auth/login",
        payload
      );

    return data;
  },

  register: async (
    payload: RegisterPayload
  ) => {
    const { data } =
      await api.post(
        "/auth/register",
        payload
      );

    return data;
  },

  getCurrentUser: async () => {
    const { data } =
      await api.get<AuthResponse>(
        "/auth/me"
      );

    return data;
  },
};