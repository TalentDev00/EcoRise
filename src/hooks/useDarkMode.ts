"use client";
import { useEffect, useState } from "react";

type DarkModeState = 'dark' | 'light'
function useDarkMode() {
  const [theme, setTheme] = useState<DarkModeState>(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [colorTheme, setTheme] as const;
}

export default useDarkMode;