import { FormEvent, useEffect, useState } from "react";
import { Todo } from "../types/todo";
import TodosApi from "../api/service";
import { MappedTodo } from "../types/mapedTodo";

export default function useTodos() {
  const [todos, setTodos] = useState<MappedTodo[]>([]);

  useEffect(() => {
    TodosApi.getTodos().then((todos) => setTodos(todos as MappedTodo[]));
  }, []);

  const addTodo = async (formValue: FormEvent<HTMLFormElement>) => {
    const todo = {} as Todo;
    const response = await TodosApi.addTodo(todo);
    if (response) {
      setTodos((currTodos) => [...currTodos, response.todo]);
    }
  };

  return { todos, addTodo };
}
