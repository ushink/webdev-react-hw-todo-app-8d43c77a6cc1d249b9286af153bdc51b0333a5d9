import { Link } from "react-router-dom";

export default function TodosPage({ currentTodo, setCurrentTodo, todos }) {
  return (
    <div className="page">
      {currentTodo ? (
        <div className="current-task">Teкущая задача:{currentTodo.text}</div>
      ) : null}

      <h3>Навигация</h3>
      <Link to="/">Задачи</Link>
      <br />
      <Link to="/add">Добавить задачу</Link>
      <br />
      <Link to="/about">О проекте</Link>
      <br />
      <br />

      <h1>Список задач</h1>

      <ul>
        {todos.map((todo) => {
          return (
            <li
              onClick={() => setCurrentTodo(todo)}
              className="todo-item"
              key={todo.id}
            >
              {todo.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
