import { nanoid } from "nanoid";
import React, { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";

export default function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(list_name) {
    if (list_name.length > 0) {
      const newTask = { id: nanoid(), list_name: list_name };
      setTasks([...tasks, newTask]);
    } else {
      alert("Empty Todos not allowed");
    }
  }

  function deleteTask(id) {
    const remainingTask = tasks.filter((task) => id !== task.id);
    setTasks(remainingTask);
  }

  const taskList = tasks.map((task) => {
    if (task.id != null) {
      return (
        <Todo
          id={task.id}
          name={task.list_name}
          key={task.id}
          deleteTask={deleteTask}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <div className="App">
      <h1>Magick Todo Mirror</h1>
      <Form addTask={addTask} />
      <ul>{taskList}</ul>
    </div>
  );
}
