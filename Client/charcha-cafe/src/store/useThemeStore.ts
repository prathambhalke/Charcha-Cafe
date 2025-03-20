import { create } from "zustand";
import { themeType } from "../lib/types";

export const useThemeStore = create<themeType>((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
}));
