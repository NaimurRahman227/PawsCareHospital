import { create } from "zustand";

import type {
  AuthState,
  LoginPayload,
} from "../types/auth";

import { authService } from "../services/auth.service";

import {
  getToken,
  setToken,
  removeToken,
} from "../utils/localStorage";

export const useAuthStore =
  create<AuthState>((set) => ({
    user: null,
    token: getToken(),

    isAuthenticated: false,
    isLoading: false,

    login: async (
      payload: LoginPayload
    ) => {
      set({ isLoading: true });

      try {
        const response =
          await authService.login(
            payload
          );

        setToken(response.token);

        set({
          user: response.user,
          token: response.token,
          isAuthenticated: true,
          isLoading: false,
        });
      } catch (error) {
        set({
          isLoading: false,
        });

        throw error;
      }
    },

    logout: () => {
      removeToken();

      set({
        user: null,
        token: null,
        isAuthenticated: false,
      });
    },

    initialize: async () => {
      const token = getToken();

      if (!token) {
        return;
      }

      try {
        const response =
          await authService.getCurrentUser();

        set({
          user: response.user,
          token,
          isAuthenticated: true,
        });
      } catch {
        removeToken();

        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      }
    },
  }));