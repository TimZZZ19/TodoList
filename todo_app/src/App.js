import styles from "./App.module.css";
import Form from "./components/Form";
import List from "./components/List";
import { useState, useEffect } from "react";

// const todoExamples = [
//   { todo: "laundry", completed: false, id: 1123 },
//   { todo: "grocery", completed: true, id: 4567 },
//   { todo: "jiojio", completed: false, id: 3567 },
//   { todo: "movie", completed: true, id: 4569 },
// ];

function App() {
  const [todos, setTodos] = useState([]);
  const [filterValue, setFilterValue] = useState("All");

  useEffect(() => {
    const dataFromLS = localStorage.getItem("todos");
    if (dataFromLS) setTodos(JSON.parse(dataFromLS));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Tim's Todo List</h1>
      <Form setTodos={setTodos} setFilterValue={setFilterValue} />
      <List todos={todos} setTodos={setTodos} filterValue={filterValue} />
    </div>
  );
}

export default App;
