import { create } from "zustand";
import { AuthClient } from "@/api";
import { version } from "@/stores/utility/config";
import { createJSONStorage, persist } from "zustand/middleware";
import type { IAuthClient } from "@/types/api";

interface State {
  isAuth: boolean | null;
  token: {
    access: string;
    refresh: string;
  } | null;
  likedCategories: string[] | null;
}

interface Actions {
  authorize(credentials: IAuthClient.AuthorizeRequest): Promise<void>;
  authenticate(credentials: IAuthClient.AuthenticateRequest): Promise<void>;
  logout(): void;
}

const initialState: State = {
  isAuth: null,
  token: null,
  likedCategories: null,
};

export const useAuthStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      ...initialState,

      async authorize(credentials) {
        try {
          const response = await AuthClient.authorize(credentials);

          set({
            isAuth: true,
            token: {
              access: response.access,
              refresh: response.refresh,
            },
          });
        } catch (e) {
          console.error(e);
          get().logout();
          throw new Error(String(e));
        }
      },

      async authenticate(credentials) {
        try {
          const response = await AuthClient.authenticate(credentials);

          set({
            isAuth: true,
            token: {
              access: response.access,
              refresh: response.refresh,
            },
          });
        } catch (e) {
          console.error(e);
          get().logout();
          throw new Error(String(e));
        }
      },

      logout() {
        set({ isAuth: null, token: null });
      },
    }),
    {
      name: "auth",
      version,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
