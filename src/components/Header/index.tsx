import { Container, Content, Info, Input } from "./styles";
import { FormEvent, useState } from "react";
import { useTodo } from "../../hooks/useTodo";
import { InputLabel } from "../Input/styles";
import { useToggleTheme } from "../../hooks/useToggleTheme";

interface TodoInterface {
  description: string;
}

export function Header() {
  const [description, setDescription] = useState("");

  const { toggledBackgroundTheme, toggledIconTheme, handleToggleTheme } =
    useToggleTheme();
  const { createTodo } = useTodo();

  async function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();

    createTodo({ id: "", description, isActive: true });

    setDescription("");
  }

  return (
    <Container background={toggledBackgroundTheme}>
      <Content>
        <Info>
          <h1>TODO</h1>
          <button>
            <img onClick={handleToggleTheme} src={toggledIconTheme} alt="" />
          </button>
        </Info>
        <Input onSubmit={handleCreateNewTodo}>
          <div></div>
          <InputLabel
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Input>
      </Content>
    </Container>
  );
}
