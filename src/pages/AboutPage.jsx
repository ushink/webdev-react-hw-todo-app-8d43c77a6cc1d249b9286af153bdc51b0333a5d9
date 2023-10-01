import { Link } from "react-router-dom";

export default function AboutPage({ setTodos }) {
  return (
    <div className="page">
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
