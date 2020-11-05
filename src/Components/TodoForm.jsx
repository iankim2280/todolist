import React, {useState} from "react";
// import uuid from "uuid";
import {v4 as uuidv4} from "uuid";
// import {uuid} from "uuid";
import {Button, TextField} from "@material-ui/core";

const TodoForm = ({addTodo}) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });
  const handleTask = (e) => {
    setTodo({...todo, task: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({...todo, id: uuidv4()});
      setTodo({...todo, task: ""});
    }
  };
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        name="task"
        type="text"
        onChange={handleTask}
        value={todo.task}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default TodoForm;
