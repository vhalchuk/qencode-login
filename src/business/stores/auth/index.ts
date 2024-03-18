import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Store = {
  accessToken: null | string;
  refreshToken: null | string;
  tokenExpire: null | number;
  setAuthData: (data: {
    accessToken: string;
    refreshToken: string;
    tokenExpire: number;
  }) => void;
};

export const useAuthStore = create(
  persist<Store>(
    (setState) => ({
      accessToken: null,
      refreshToken: null,
      tokenExpire: null,
      setAuthData: (data) => setState(data),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => window.localStorage),
    },
  ),
);
