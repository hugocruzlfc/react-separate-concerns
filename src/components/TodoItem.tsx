import React from "react";

import { MappedTodo } from "../types/mapedTodo";

interface TodoItemProps {
  todo: MappedTodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li key={todo.id}>
      <p>{todo.title}</p>
      <p>{todo.status}</p>
    </li>
  );
};

export default TodoItem;
