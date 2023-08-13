import { Todo } from "../types/todo";

const parseTodos = (todos: Todo[]) => {
  return todos.map((todo) => ({
    id: todo.id,
    title: todo.title,
    status: todo.completed ? "Completed" : "Not Completed",
  }));
};

export default parseTodos;
