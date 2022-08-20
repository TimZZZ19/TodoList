import React from "react";
import styles from "./List.module.css";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

const List = ({ todos }) => {
  console.log(todos);

  const list = todos.map((todo) => <Todo key={uuid()} todo={todo} />);
  return <ul className={styles.list}>{list}</ul>;
};

export default List;
