import React from "react";
import styles from "./Todo.module.css";

const Todo = ({ todo }) => {
  return (
    <li className={styles.todo}>
      <span className={styles["todo-name"]}>{todo}</span>
      <button className={styles["check-btn"]} type="button">
        <i className="fas fa-check"></i>
      </button>
      <button className={styles["delete-btn"]} type="button">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Todo;
