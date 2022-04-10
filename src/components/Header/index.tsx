import { Container, Content, Info, Input } from "./styles";
import { FormEvent, useState } from "react";
import { useTodo } from "../../hooks/useTodo";

interface HeaderProps {
  handleSetTheme: () => void;
  image: string;
  backgroundImage: string;
}

interface TodoInterface {
  description: string;
}

export function Header({
  image,
  backgroundImage,
  handleSetTheme,
}: HeaderProps) {
  const [description, setDescription] = useState("");

  const { createTodo } = useTodo();

  async function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();

    createTodo({ id: "", description, isActive: true });

    setDescription("");
  }

  return (
    <Container background={backgroundImage}>
      <Content>
        <Info>
          <h1>TODO</h1>
          <button>
            <img onClick={handleSetTheme} src={image} alt="" />
          </button>
        </Info>
        <Input onSubmit={handleCreateNewTodo}>
          <div></div>
          <input
            type="text"
            value={description}
            maxLength={250}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Input>
      </Content>
    </Container>
  );
}
