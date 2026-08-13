import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ThemeState = {
  mode: "light" | "dark";
};

const getInitialMode = (): "light" | "dark" => {
  if (typeof window !== "undefined") {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") {
        return saved;
      }
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    } catch {
      // fallback
    }
  }
  return "light";
};

export const applyThemeToDOM = (mode: "light" | "dark") => {
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    root.setAttribute("data-theme", mode);
    document.body.setAttribute("data-theme", mode);
    if (mode === "dark") {
      root.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      root.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }
};

const initialMode = getInitialMode();
applyThemeToDOM(initialMode);

const initialState: ThemeState = {
  mode: initialMode,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("theme", state.mode);
        } catch {
          // ignore
        }
      }
      applyThemeToDOM(state.mode);
    },
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      state.mode = action.payload;
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("theme", action.payload);
        } catch {
          // ignore
        }
      }
      applyThemeToDOM(action.payload);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;

