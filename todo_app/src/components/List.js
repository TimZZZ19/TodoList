import React from "react";
import styles from "./List.module.css";
import Todo from "./Todo";

const List = ({ todos, setTodos, filterValue }) => {
  const makeList = (items, filterLogic) =>
    items
      .filter(filterLogic)
      .map((item) => <Todo key={item.id} item={item} setTodos={setTodos} />);

  let list;
  switch (filterValue) {
    case "All":
      list = makeList(todos, () => true);
      break;
    case "Completed":
      list = makeList(todos, (item) => item.completed);
      break;
    case "Uncompleted":
      list = makeList(todos, (item) => !item.completed);
      break;
  }

  return <ul className={styles.list}>{list}</ul>;
};

export default List;
