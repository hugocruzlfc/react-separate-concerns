import parseTodos from "../helper/parseTodos";
import { Todo } from "../types/todo";

class TodosApi {
  static getTodos() {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => parseTodos(data));
  }

  static addTodo(todo: Todo) {
    return fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => data.todo);
  }
}

export default TodosApi;
