import React from "react";
import styles from "./Form.module.css";
import { useState, useRef, useEffect } from "react";

const Form = ({ setTodos }) => {
  const [newTodo, setNewTodo] = useState("");
  const inputRef = useRef(null);

  const newTodoChangeHandler = (e) => setNewTodo(e.target.value);

  const newTodoSubmitHandler = (e) => {
    e.preventDefault();
    if (!newTodo) {
      console.log("New todo can't be empty");
      return;
    }
    setTodos((prev) => [...prev, newTodo]);
    setNewTodo("");
  };

  useEffect(() => inputRef.current.focus(), []);

  return (
    <form onSubmit={newTodoSubmitHandler} className={styles.form}>
      <div className={styles.todo}>
        <input
          className={styles["todo-input"]}
          type="text"
          value={newTodo}
          ref={inputRef}
          onChange={newTodoChangeHandler}
        />
        <button className={styles["todo-submit-btn"]} type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <div className={styles.filter}>
        <select>
          <option>All</option>
          <option>Completed</option>
          <option>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
