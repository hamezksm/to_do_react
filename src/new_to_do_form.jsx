import { useState } from "react";

export function NewToDoForm({onSubmit}) { //passing props in a bundle{}
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); //prevents page from refreshing.

    if (newItem === "")return

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        {/* gets the value of the input */}
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
