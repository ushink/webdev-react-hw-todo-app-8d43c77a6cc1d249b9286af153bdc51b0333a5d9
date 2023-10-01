import { Route, Routes } from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";
import AddTodoPage from "./pages/AddTodoPage";

function AppRoutes({ currentTodo, setCurrentTodo, todos, setTodos }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TodosPage
            todos={todos}
            setTodos={setTodos}
            currentTodo={currentTodo}
            setCurrentTodo={setCurrentTodo}
          ></TodosPage>
        }
      ></Route>
      <Route
        path="/about"
        element={
          <AboutPage
            currentTodo={currentTodo}
            setCurrentTodo={setCurrentTodo}
          ></AboutPage>
        }
      ></Route>
      <Route
        path="/add"
        element={
          <AddTodoPage
            setTodos={setTodos}
            currentTodo={currentTodo}
            setCurrentTodo={setCurrentTodo}
          ></AddTodoPage>
        }
      ></Route>
    </Routes>
  );
}

export default AppRoutes;
