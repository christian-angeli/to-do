import { TodoProvider } from "./hooks/useTodo";
import { ToggleThemeProvider } from "./hooks/useToggleTheme";

import { Homepage } from "./pages/Homepage";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <TodoProvider>
      <ToggleThemeProvider>
        <Homepage />
        <GlobalStyle />
      </ToggleThemeProvider>
    </TodoProvider>
  );
}
export default App;
