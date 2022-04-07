import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

import { Homepage } from "./components/Homepage";
import { TodoProvider } from "./hooks/useTodo";

function App() {
  return (
    <TodoProvider>
      <Homepage />
    </TodoProvider>
  );
}

export default App;
