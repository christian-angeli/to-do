import { useTodo } from "../../hooks/useTodo";
import {
  Container,
  Content,
  Advice,
  Input,
  TodoList,
  Options,
  Filters,
  ActiveButton,
  DisabledButton,
  ActiveDescription,
  DisabledDescription,
} from "./styles";
import iconCheck from "../../assets/icon-check.svg";

export function List() {
  const {
    todoList,
    itemsLeft,
    handleCheckActive,
    handleAllList,
    handleActiveList,
    handleCompletedList,
    handleRemoveCompletedTasks,
  } = useTodo();

  return (
    <Container>
      <Content>
        <TodoList>
          {todoList.map((todo) => (
            <Input key={todo.description}>
              {todo.isActive === true ? (
                <>
                  <ActiveButton
                    onClick={() => handleCheckActive(todo.description)}
                  ></ActiveButton>
                  <ActiveDescription>{todo.description}</ActiveDescription>
                </>
              ) : (
                <>
                  <DisabledButton
                    onClick={() => handleCheckActive(todo.description)}
                  >
                    <img src={iconCheck}></img>
                  </DisabledButton>
                  <DisabledDescription>{todo.description}</DisabledDescription>
                </>
              )}
            </Input>
          ))}
        </TodoList>
        <Options>
          <p>{itemsLeft} items left</p>
          <Filters>
            <button onClick={handleAllList}>All</button>
            <button onClick={handleActiveList}>Active</button>
            <button onClick={handleCompletedList}>Completed</button>
          </Filters>
          <button onClick={handleRemoveCompletedTasks}>Clear Completed</button>
        </Options>
      </Content>
      <Advice>
        <span>Drag and drop to redorder list (not allowed yet)</span>
      </Advice>
    </Container>
  );
}
