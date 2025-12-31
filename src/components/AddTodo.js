import React, { useState } from "react";
import "./css/TodoForm.css";
export const AddTodo = (props) => {
  let [title, setTitle] = useState("");
  let [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    props.addTodo(title, desc);
    setTitle("");
    setDesc("");
  };
  return (
    <div className="todo-container">
      <form onSubmit={submit} className="todo-form shadow-lg">
        <h3 className="todo-heading text-center">Add Todo</h3>

        <div className="form-group mb-3 row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            <h5>Title</h5>
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control input-field"
              id="title"
              placeholder="Enter title"
            />
          </div>
        </div>

        <div className="form-group mb-3 row">
          <label htmlFor="desc" className="col-sm-2 col-form-label">
            <h5>Description</h5>
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="form-control input-field"
              id="desc"
              placeholder="Enter description"
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-gradient">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};
