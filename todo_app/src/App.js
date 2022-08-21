import styles from "./App.module.css";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

const todoExamples = [
  { todo: "laundry", completed: false, id: 1123 },
  { todo: "grocery", completed: true, id: 4567 },
];

function App() {
  const [todos, setTodos] = useState(todoExamples);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Tim's Todo List</h1>
      <Form setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
