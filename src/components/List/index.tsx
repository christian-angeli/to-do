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
import { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

interface TodoInterface {
  description: string;
  isActive: boolean;
  id: string;
}

export function List() {
  const {
    todoList,
    itemsLeft,
    handleCheckActive,
    setTodoList,
    setAllList,
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
              <TodoList {...provided.droppableProps} ref={provided.innerRef}>
                {todoList.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided) => (
                      <Input
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {todo.isActive === true ? (
                          <Card>
                            <ActiveButton
                              onClick={() => handleCheckActive(todo.id)}
                            ></ActiveButton>
                            <ActiveDescription>
                              <p>{todo.description}</p>
                            </ActiveDescription>
                            <DeleteButton
                              onClick={() => handleDeleteTask(todo.id)}
                            >
                              <img src={iconCross} alt="" />
                            </DeleteButton>
                          </Card>
                        ) : (
                          <Card>
                            <DisabledButton
                              onClick={() => handleCheckActive(todo.id)}
                            >
                              <img src={iconCheck}></img>
                            </DisabledButton>
                            <DisabledDescription>
                              <p>{todo.description}</p>
                            </DisabledDescription>
                            <DeleteButton
                              onClick={() => handleDeleteTask(todo.id)}
                            >
                              <img src={iconCross} alt="" />
                            </DeleteButton>
                          </Card>
                        )}
                      </Input>
                    )}
                  </Draggable>
                ))}
              </TodoList>
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
