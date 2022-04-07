import { Header } from "../Header";
import { List } from "../List";
import { Container } from "./styles";
import light from "../../themes/light";
import dark from "../../themes/dark";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/global";
import icon_moon from "../../assets/icon-moon.svg";
import icon_sun from "../../assets/icon-sun.svg";
import light_desktop_background from "../../assets/bg-desktop-light.jpg";
import dark_desktop_background from "../../assets/bg-desktop-dark.jpg";

export function Homepage() {
  const [theme, setTheme] = useState(light);
  const [image, setImage] = useState(icon_moon);
  const [backgroundImage, setBackgroundImage] = useState(
    light_desktop_background
  );

  function handleSetTheme() {
    setTheme(theme.name === "light" ? dark : light);
    setImage(image === icon_moon ? icon_sun : icon_moon);
    setBackgroundImage(
      backgroundImage === light_desktop_background
        ? dark_desktop_background
        : light_desktop_background
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header
          handleSetTheme={handleSetTheme}
          image={image}
          backgroundImage={backgroundImage}
        />
        <List />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}
