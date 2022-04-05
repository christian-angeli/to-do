import {
  Container,
  Content,
  Advice,
  Input,
  TodoList,
  Options,
  Filters,
} from "./styles";

export function List() {
  return (
    <Container>
      <Content>
        <TodoList>
          <Input>
            <div></div>
            <p>Terminar o meu site de TODO</p>
          </Input>
          <Input>
            <div></div>
            <p>Terminar o meu site de TODO</p>
          </Input>
          <Input>
            <div></div>
            <p>Terminar o meu site de TODO</p>
          </Input>
          <Input>
            <div></div>
            <p>Terminar o meu site de TODO</p>
          </Input>
          <Input>
            <div></div>
            <p>Terminar o meu site de TODO</p>
          </Input>
          <Input>
            <div></div>
            <p>Terminar o meu site de TODO</p>
          </Input>
          <Input>
            <div></div>
            <p>Terminar o meu site de TODO</p>
          </Input>
        </TodoList>
        <Options>
          <p>5 items left</p>
          <Filters>
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
          </Filters>
          <p>Clear Completed</p>
        </Options>
      </Content>
      <Advice>
        <span>Drag and drop to redorder list</span>
      </Advice>
    </Container>
  );
}
