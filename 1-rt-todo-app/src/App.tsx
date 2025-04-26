import React, { useState } from "react";
import { Todo } from "./types/todo";
import TodoList from "./components/TodoList";

const App: React.FC = (): React.ReactNode => {
  const [todoItem, setTodoItem] = useState("");
  const [todo, setTodo] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: todo.length + 1,
      taskName: todoItem,
      completed: false,
    };
    setTodo([...todo, newTodo]);
    setTodoItem("");
  };

  const toggleTask = (id: number): void => {
    const newTodo = todo.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodo(newTodo);
  };

  const deleteTask = (id: number) => {
    setTodo(() => todo.filter((item) => item.id !== id));
  };

  return (
    <>
      <div>
        <h2>Todo App</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="todo"
            required
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
            id="todo"
            placeholder="Enter todo"
          />
          <button type="submit">Add</button>
        </form>
        <div>
          <TodoList
            todos={todo}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </>
  );
};

export default App;
