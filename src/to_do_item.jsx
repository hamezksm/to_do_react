export function ToDoItem({completed, id, title, toggleTodo, deleteTodo}) {
  return (
    // Ensure when you are returning an array of elements, each element has a unique key property
    // to allow react to identify it easily for editing or deletion
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        className="btn btn-danger"
        // Always remember to pass function as below and not a result( not using the function brackets)
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}
