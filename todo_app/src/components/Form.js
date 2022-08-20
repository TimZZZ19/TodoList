import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <form onSubmit={console.log("clicked")} className={styles.form}>
      <div className={styles.todo}>
        <input className={styles["todo-input"]} type="text" />
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
