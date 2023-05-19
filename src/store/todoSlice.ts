import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodosState = {
  list: Todo[];
};

const initialState: TodosState = {
  list: [],
};

type TodoValueText = {
  text: string;
};

type TodoValueId = {
  id: string;
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<TodoValueText>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action: PayloadAction<TodoValueId>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoComplete(state, action: PayloadAction<TodoValueId>) {
      const toggledTodo = state.list.find(
        (todo) => todo.id === action.payload.id
      );
      if (toggledTodo) toggledTodo.completed = !toggledTodo.completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;
