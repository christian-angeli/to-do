import { Draggable } from "react-beautiful-dnd";

import { CompletedButton } from "../CompletedButton";

import { useTodo } from "../../hooks/useTodo";

import { Container, Content, DeleteButton, Description } from "./styles";

import iconCross from "../../assets/icon-cross.svg";

interface TodoCardProps {
  id: string;
  index: number;
  isActive: boolean;
  description: string;
}

export function TodoCard({ id, index, isActive, description }: TodoCardProps) {
  const { handleCheckActive, handleDeleteTask } = useTodo();

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Content>
            <CompletedButton
              isActive={isActive}
              onClick={() => handleCheckActive(id)}
            />
            <Description isActive={isActive}>{description}</Description>
            <DeleteButton onClick={() => handleDeleteTask(id)}>
              <img src={iconCross} alt="" />
            </DeleteButton>
          </Content>
        </Container>
      )}
    </Draggable>
  );
}
