import { createContext, ReactNode, useContext, useState } from "react";

import { ThemeProvider } from "styled-components";

import light from "../themes/light";
import dark from "../themes/dark";
import iconSun from "../assets/icon-sun.svg";
import iconMoon from "../assets/icon-moon.svg";
import backgroundLight from "../assets/bg-desktop-light.jpg";
import backgroundDark from "../assets/bg-desktop-dark.jpg";

interface ToggleThemeProviderProps {
  children: ReactNode;
}

interface ToggleThemeContextData {
  toggledBackgroundTheme: string;
  toggledIconTheme: string;
  handleToggleTheme: () => void;
}

const ToggleThemeContext = createContext<ToggleThemeContextData>(
  {} as ToggleThemeContextData
);

export function ToggleThemeProvider({ children }: ToggleThemeProviderProps) {
  const [toggledBackgroundTheme, setToggledBackgroundTheme] =
    useState(backgroundLight);
  const [toggledIconTheme, setToggleIconTheme] = useState(iconMoon);
  const [toggledTheme, setToggleTheme] = useState(light);

  function handleToggleTheme() {
    setToggleTheme(toggledTheme === light ? dark : light);
    setToggleIconTheme(toggledIconTheme === iconMoon ? iconSun : iconMoon);
    setToggledBackgroundTheme(
      toggledBackgroundTheme === backgroundLight
        ? backgroundDark
        : backgroundLight
    );
  }

  return (
    <ToggleThemeContext.Provider
      value={{ toggledBackgroundTheme, toggledIconTheme, handleToggleTheme }}
    >
      <ThemeProvider theme={toggledTheme}>{children}</ThemeProvider>
    </ToggleThemeContext.Provider>
  );
}

export function useToggleTheme() {
  const context = useContext(ToggleThemeContext);

  return context;
}
