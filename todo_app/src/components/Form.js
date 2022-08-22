import React from "react";
import styles from "./Form.module.css";
import { useState, useRef, useEffect } from "react";
import { v4 as uuid } from "uuid";

const Form = ({ setTodos, setFilterValue }) => {
  const [newTodo, setNewTodo] = useState("");
  const [errorMsgShown, setErrorMsgShown] = useState(false);
  const inputRef = useRef(null);

  const newTodoChangeHandler = (e) => setNewTodo(e.target.value);

  const newTodoSubmitHandler = (e) => {
    e.preventDefault();
    if (!newTodo) {
      setErrorMsgShown(true);
      setTimeout(() => setErrorMsgShown(false), 1500);
      return;
    }
    setTodos((prev) => [
      ...prev,
      { todo: newTodo, id: uuid(), completed: false },
    ]);
    setNewTodo("");
  };

  useEffect(() => inputRef.current.focus(), []);

  const selectHandler = (e) => {
    setFilterValue(e.target.value);
  };

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
        <select onChange={selectHandler}>
          <option>All</option>
          <option>Completed</option>
          <option>Uncompleted</option>
        </select>
      </div>
      <div
        className={`${styles["error-msg"]} ${
          errorMsgShown && styles["error-msg--shown"]
        }`}
      >
        <p>Input can't be empty</p>
      </div>
    </form>
  );
};

export default Form;
