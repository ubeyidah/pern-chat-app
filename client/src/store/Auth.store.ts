import { create } from "zustand";
import { User } from "../types/types";

type AuthType = {
  user: User | null;
  signin: (user: User) => void;
  signout: () => void;
};

export const useAuth = create<AuthType>((set) => ({
  user: null,
  signin: (user) => set({ user }),
  signout: () => set({ user: null }),
}));
