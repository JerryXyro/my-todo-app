import React from "react";

const Todo = (props) => {
  function handleClick() {
    props.deleteTask(props.id);
  }

  return (
    <li>
      {props.name}
      <span class="close" onClick={handleClick}>
        x
      </span>
    </li>
  );
};

export default Todo;
