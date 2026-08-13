import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/Store";

interface ThemeManagerProps {
  children: React.ReactNode;
}

export const ThemeManager: React.FC<ThemeManagerProps> = ({ children }) => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      root.classList.remove("dark");
      document.body.classList.remove("dark");
    }
    root.setAttribute("data-theme", mode);
    document.body.setAttribute("data-theme", mode);

    try {
      localStorage.setItem("theme", mode);
    } catch {
      // ignore storage errors
    }
  }, [mode]);

  return <>{children}</>;
};

export default ThemeManager;
