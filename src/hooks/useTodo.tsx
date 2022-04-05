import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

interface TodoInterface {
  description: string;
  isActive: boolean;
}

type TodoInput = Omit<TodoInterface, "isActive">;

interface TodoProviderProps {
  children: ReactNode;
}

interface TodoContextData {
  todoList: TodoInterface[];
  itemsLeft: number;
  createTodo: (todo: TodoInput) => Promise<void>;
  handleCheckActive: (id: string) => void;
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
    const data = todoList.filter((value) => value.isActive === true);
    setItemsLeft(data.length);
  }, [todoList]);

  async function createTodo(todoInput: TodoInput) {
    const todoInputed = {
      ...todoInput,
      isActive: true,
    };

    setAllList([...allList, todoInputed]);
    setTodoList([...todoList, todoInputed]);
  }

  function handleCheckActive(todoId: string) {
    const newList = todoList.map((todo) => {
      if (todo.description === todoId && todo.isActive === true) {
        return {
          ...todo,
          isActive: false,
        };
      }
      if (todo.description === todoId && todo.isActive === false) {
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

  return (
    <TodoContext.Provider
      value={{
        todoList,
        itemsLeft,
        createTodo,
        handleCheckActive,
        handleAllList,
        handleActiveList,
        handleCompletedList,
        handleRemoveCompletedTasks,
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
