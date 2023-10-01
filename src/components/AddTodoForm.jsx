import { useState } from "react";
import { postTodo } from "../api";

export function AddTodoForm({ setTodos }) {
  const [newTodoText, setNewTodoText] = useState("");
  const [isNewTodoLoading, setISNewTodoLoading] = useState(false);

  const handleAddTodoClick = async () => {
    if (!newTodoText) {
      return;
    }
    setISNewTodoLoading(true);

    const newTodos = await postTodo(newTodoText);

    setISNewTodoLoading(false);

    setTodos(newTodos.todos);

    setNewTodoText("");
  };

  return (
    <div>
      <input
        value={newTodoText}
        onChange={(event) => {
          setNewTodoText(event.target.value);
        }}
      />
      <button disabled={isNewTodoLoading} onClick={handleAddTodoClick}>
        {isNewTodoLoading ? "Задача добавляется" : "Добавить задачу"}
      </button>
    </div>
  );
}
