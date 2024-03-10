import { useEffect, useState } from "react";
import "./styles.css";
import { NewToDoForm } from "./new_to_do_form";
import { ToDoList } from "./to_do_list";

export default function App() {

  // Check localStorage for a stored values, if absent, present an empty array
  const [todos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue); 
  });

  // Run function everytime values in our second property(todos) change.
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addToDo(title) {
    setToDos((currentTodos) => {
      //take value of of whatever my state is
      // Returns the value that you want the new state to be.
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setToDos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setToDos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewToDoForm onSubmit={addToDo} />
      <h1>TODO LIST</h1>
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
