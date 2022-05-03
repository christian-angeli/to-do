import { useState } from "react";

import { TodoCard } from "../TodoCard";

import { Container, Content, Advice, List, Options, Filters } from "./styles";

import { useTodo } from "../../hooks/useTodo";

import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

export function TodoList() {
  const {
    todoList,
    itemsLeft,
    setTodoList,
    setAllList,
    handleAllList,
    handleActiveList,
    handleCompletedList,
    handleRemoveCompletedTasks,
  } = useTodo();

  const [isSelected, setIsSelected] = useState("all");

  function setSelectedButton(name: string) {
    setIsSelected(name);
  }

  function onDragEnd(result: DropResult) {
    const { source, destination } = result;
    if (!destination) return;

    const items = Array.from(todoList);
    const [newOrder] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newOrder);

    setTodoList([...items]);
    setAllList([...items]);
  }

  return (
    <Container>
      <Content>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todos">
            {(provided) => (
              <List {...provided.droppableProps} ref={provided.innerRef}>
                {todoList.map((todo, index) => (
                  <TodoCard
                    id={todo.id}
                    index={index}
                    isActive={todo.isActive}
                    description={todo.description}
                  />
                ))}
              </List>
            )}
          </Droppable>
        </DragDropContext>
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
        <span>Drag and drop to redorder list</span>
      </Advice>
    </Container>
  );
}
