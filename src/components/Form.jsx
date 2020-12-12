import React, { useState } from "react";

const Form = (props) => {
  const [list_name, setName] = useState("");

  function changeColorEnter() {
    let btn = document.getElementById("button_color_hover");
    btn.style.backgroundColor = list_name.length > 0 ? "green" : "red";
  }

  function changeColorLeave() {
    let btn = document.getElementById("button_color_hover");
    btn.style.backgroundColor = "#ffffff";
  }
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
      <button
        type="submit"
        id="button_color_hover"
        onMouseEnter={changeColorEnter}
        onMouseLeave={changeColorLeave}
      >
        Add
      </button>
    </form>
  );
};

export default Form;
