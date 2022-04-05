import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import light from "./themes/light";
import dark from "./themes/dark";
import { Homepage } from "./components/Homepage";
import { TodoProvider } from "./hooks/useTodo";

function App() {
  const [theme, setTheme] = useState(light);

  function handleSetTheme() {
    setTheme(theme.name === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <TodoProvider>
        <Homepage />
        <GlobalStyle />
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
