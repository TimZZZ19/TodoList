import React from "react";
import styles from "./List.module.css";
import Todo from "./Todo";

const List = ({ todos, setTodos }) => {
  const list = todos.map((item) => (
    <Todo key={item.id} item={item} setTodos={setTodos} />
  ));
  return <ul className={styles.list}>{list}</ul>;
};

export default List;
