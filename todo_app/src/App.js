import styles from "./App.module.css";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

const todoExamples = ["laundry", "grocery"];

function App() {
  const [todos, setTodos] = useState(todoExamples);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Tim's Todo List</h1>
      <Form setTodos={setTodos} />
      <List todos={todos} />
    </div>
  );
}

export default App;
