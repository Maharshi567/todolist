import React from "react";
import "./css/TodoItem.css"; // Adjust path as needed

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item-card">
      <h4 className="todo-title">Title: {todo.title}</h4>
      <p className="todo-desc">Description: {todo.desc}</p>
      <button
        className="btn btn-sm btn-danger btn-delete"
        onClick={() => onDelete(todo)}
      >
        Delete
      </button>
    </div>
  );
};
