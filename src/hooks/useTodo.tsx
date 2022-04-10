import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";

interface TodoInterface {
  description: string;
  isActive: boolean;
  id: string;
}

type TodoInput = Omit<TodoInterface, "isActive" | "id">;

interface TodoProviderProps {
  children: ReactNode;
}

interface TodoContextData {
  todoList: TodoInterface[];
  itemsLeft: number;
  createTodo: (todo: TodoInterface) => Promise<void>;
  setTodoList: Dispatch<SetStateAction<TodoInterface[]>>;
  setAllList: Dispatch<SetStateAction<TodoInterface[]>>;
  handleCheckActive: (id: string) => void;
  handleDeleteTask: (itemId: string) => void;
  handleAllList: () => void;
  handleActiveList: () => void;
  handleCompletedList: () => void;
  handleRemoveCompletedTasks: () => void;
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

export function TodoProvider({ children }: TodoProviderProps) {
  const [todoList, setTodoList] = useState<TodoInterface[]>([]);
  const [allList, setAllList] = useState<TodoInterface[]>([]);
  const [itemsLeft, setItemsLeft] = useState(0);

  useEffect(() => {
    const data = allList.filter((value) => value.isActive === true);
    setItemsLeft(data.length);
  }, [allList]);

  async function createTodo(todoInput: TodoInput) {
    const todoInputed = {
      ...todoInput,
      id: Math.random().toString(36).slice(2),
      isActive: true,
    };

    setAllList([...allList, todoInputed]);
    setTodoList([...todoList, todoInputed]);
  }

  function handleCheckActive(todoId: string) {
    const newList = todoList.map((todo) => {
      if (todo.id === todoId && todo.isActive === true) {
        return {
          ...todo,
          isActive: false,
        };
      }
      if (todo.id === todoId && todo.isActive === false) {
        return {
          ...todo,
          isActive: true,
        };
      }

      return todo;
    });

    setTodoList(newList);
    setAllList(newList);
  }

  async function handleAllList() {
    setTodoList(allList);
  }

  async function handleActiveList() {
    const newList = allList.filter((item) => item.isActive === true);
    setTodoList(newList);
  }

  async function handleCompletedList() {
    const newList = allList.filter((item) => item.isActive === false);
    setTodoList(newList);
  }

  async function handleRemoveCompletedTasks() {
    const newList = todoList.filter((item) => item.isActive === true);
    setTodoList(newList);
    setAllList(newList);
  }

  async function handleDeleteTask(itemId: string) {
    const newList = allList.filter((item) => item.id !== itemId);
    setTodoList(newList);
    setAllList(newList);
  }

  return (
    <TodoContext.Provider
      value={{
        todoList,
        itemsLeft,
        createTodo,
        setTodoList,
        setAllList,
        handleCheckActive,
        handleAllList,
        handleActiveList,
        handleCompletedList,
        handleRemoveCompletedTasks,
        handleDeleteTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);

  return context;
}
