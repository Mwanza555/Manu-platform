import type { AuthSession, LoginCredentials } from "../types";

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthSession | null> => {
    void credentials;

    return null;
  },
  logout: async (): Promise<void> => undefined,
  getSession: async (): Promise<AuthSession | null> => null,
};
