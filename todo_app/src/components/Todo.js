import React from "react";
import styles from "./Todo.module.css";

const Todo = ({ item, setTodos }) => {
  const { todo, completed, id } = item;

  const completionHandler = () => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id !== id ? item : { ...item, completed: !completed }
      )
    );
  };

  const deletionHandler = () => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <li className={`${styles.todo} ${completed && styles["todo--completed"]}`}>
      <button
        type="button"
        className={styles["check-btn"]}
        onClick={completionHandler}
      >
        <i className="fas fa-check"></i>
      </button>
      <span className={styles["todo-name"]}>{todo}</span>

      <button
        type="button"
        className={styles["delete-btn"]}
        onClick={deletionHandler}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Todo;
