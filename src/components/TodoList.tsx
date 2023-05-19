import TodoItem from "./TodoItem";
import { useAppSelector } from "../hooks";

const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.list);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        
        />
      ))}
    </ul>
  );
};

export default TodoList;
