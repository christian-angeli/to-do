import { useTodo } from "../../hooks/useTodo";
import {
  Container,
  Content,
  Advice,
  Input,
  Card,
  TodoList,
  Options,
  DeleteButton,
  Filters,
  ActiveButton,
  DisabledButton,
  ActiveDescription,
  DisabledDescription,
} from "./styles";
import iconCheck from "../../assets/icon-check.svg";
import iconCross from "../../assets/icon-cross.svg";
import { useState } from "react";

export function List() {
  const {
    todoList,
    itemsLeft,
    handleCheckActive,
    handleAllList,
    handleActiveList,
    handleCompletedList,
    handleRemoveCompletedTasks,
    handleDeleteTask,
  } = useTodo();
  const [isSelected, setIsSelected] = useState("all");

  function setSelectedButton(name: string) {
    setIsSelected(name);
  }

  return (
    <Container>
      <Content>
        <TodoList>
          {todoList.map((todo) => (
            <Input key={todo.id}>
              {todo.isActive === true ? (
                <Card>
                  <ActiveButton
                    onClick={() => handleCheckActive(todo.id)}
                  ></ActiveButton>
                  <ActiveDescription>
                    <p>{todo.description}</p>
                  </ActiveDescription>
                  <DeleteButton onClick={() => handleDeleteTask(todo.id)}>
                    <img src={iconCross} alt="" />
                  </DeleteButton>
                </Card>
              ) : (
                <Card>
                  <DisabledButton onClick={() => handleCheckActive(todo.id)}>
                    <img src={iconCheck}></img>
                  </DisabledButton>
                  <DisabledDescription>
                    <p>{todo.description}</p>
                  </DisabledDescription>
                  <DeleteButton onClick={() => handleDeleteTask(todo.id)}>
                    <img src={iconCross} alt="" />
                  </DeleteButton>
                </Card>
              )}
            </Input>
          ))}
        </TodoList>
        <Options>
          <p>{itemsLeft} items left</p>
          <Filters>
            <button
              onClick={() => {
                handleAllList();
                setSelectedButton("all");
              }}
              className={isSelected === "all" ? "selected" : ""}
            >
              All
            </button>
            <button
              onClick={() => {
                handleActiveList();
                setSelectedButton("active");
              }}
              className={isSelected === "active" ? "selected" : ""}
            >
              Active
            </button>
            <button
              onClick={() => {
                handleCompletedList();
                setSelectedButton("completed");
              }}
              className={isSelected === "completed" ? "selected" : ""}
            >
              Completed
            </button>
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
