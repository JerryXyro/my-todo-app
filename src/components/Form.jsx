import React, { useState } from "react";

const Form = (props) => {
  const [list_name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
    console.log(list_name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(list_name);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={list_name}
        onChange={handleChange}
        autoComplete="off"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
