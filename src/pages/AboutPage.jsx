import { Link } from "react-router-dom";

export default function AboutPage({ currentTodo }) {
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

      <h1>O проекте</h1>
      <p>Учебный проект</p>
    </div>
  );
}
