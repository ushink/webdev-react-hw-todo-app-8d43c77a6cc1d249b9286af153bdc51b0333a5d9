import { useState } from "react";
import { postTodo } from "../api";

export function AddTodoForm({ setTodos }) {
  const [newTodoText, setNewTodoText] = useState("");
  const [isNewTodoLoading, setISNewTodoLoading] = useState(false);
  const [addTodoError, setAddTodoError] = useState(null);

  const handleAddTodoClick = async () => {
    try {
      if (!newTodoText) {
        return;
      }
      setISNewTodoLoading(true);
      const newTodos = await postTodo(newTodoText);
      setTodos(newTodos.todos);
      setNewTodoText("");
    } catch (error) {
      // alert(error.message);
      addTodoError(error.message);
    } finally {
      setISNewTodoLoading(false);
    }
  };

  return (
    <div>
      <input
        value={newTodoText}
        onChange={(event) => {
          setNewTodoText(event.target.value);
        }}
      />
      <p style={{ color: "red" }}>{addTodoError}</p>
      <button disabled={isNewTodoLoading} onClick={handleAddTodoClick}>
        {isNewTodoLoading ? "Задача добавляется" : "Добавить задачу"}
      </button>
    </div>
  );
}
