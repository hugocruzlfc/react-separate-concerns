import React from "react";
// import { Todo } from "../types/todo";
// import TodosApi from "../api/service";
import TodoItem from "./TodoItem";
import useTodos from "../hooks/useTodos";

const Todos: React.FC = () => {
  //const [todos, setTodos] = useState<Todo[]>([]);
  const { addTodo, todos } = useTodos();

  console.log(todos);

  // useEffect(() => {
  //   //before
  //   // fetch("https://jsonplaceholder.typicode.com/todos")
  //   //   .then((response) => response.json())
  //   //   .then((json) => setTodos(json));

  //   //after
  //   TodosApi.getTodos().then((data) => setTodos(data));
  // }, []);

  // const addTodo = async () => {
  //   //before
  //   // const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
  //   //   method: "POST",
  //   //   body: JSON.stringify({
  //   //     title: "new todo",
  //   //     completed: false,
  //   //     id: todos.length + 1,
  //   //     userId: 1,
  //   //   }),
  //   //   headers: {
  //   //     "Content-type": "application/json; charset=UTF-8",
  //   //   },
  //   // });
  //   // const json = await response.json();
  //   // if (json) {
  //   //   setTodos([...todos, json]);
  //   // }

  //   //after
  //   const response = await TodosApi.addTodo({
  //     title: "new todo",
  //     completed: false,
  //     id: todos.length + 1,
  //     userId: 1,
  //   } as Todo);
  //   console.log(response);
  //   setTodos([...todos, response]);
  // };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add todo"
        />
        <input type="submit" />
      </form>
      <ul>
        {todos.map((todo) => (
          //   <li key={todo.id}>
          //     <p>{todo.title}</p>
          //     <p>{todo.completed ? "Completed" : "Not completed"}</p>
          //   </li>
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
