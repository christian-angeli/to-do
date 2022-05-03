import { Header } from "../../components/Header";
import { TodoList } from "../../components/TodoList";
import { Container } from "./styles";

export function Homepage() {
  return (
    <Container>
      <Header />
      <TodoList />
    </Container>
  );
}
