import { Container, Content, Info, Input } from "./styles";
import icon_moon from "../../assets/icon-moon.svg";
import { FormEvent, useState } from "react";
import { useTodo } from "../../hooks/useTodo";

export function Header() {
  const [description, setDescription] = useState("");

  const { createTodo } = useTodo();

  async function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();

    createTodo({ description });

    setDescription("");
  }

  return (
    <Container>
      <Content>
        <Info>
          <h1>TODO</h1>
          <img src={icon_moon} alt="" />
        </Info>
        <Input onSubmit={handleCreateNewTodo}>
          <div></div>
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Input>
      </Content>
    </Container>
  );
}
