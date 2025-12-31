import React from "react";
import { TodoItem } from "./TodoItem";
import "./css/Todos.css"; // Make sure this path is correct

export const Todos = (props) => {
  return (
    <div className="todos-container">
      <h3 id="Heading2" className="todos-heading text-center">
        ToDos List
      </h3>

      {props.todos.length === 0 ? (
        <h4 className="no-todos-text">No todos to display</h4>
      ) : (
        <div className="todos-list">
          {props.todos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.sno}
              onDelete={props.onDelete}
              className="todo-item"
            />
          ))}
        </div>
      )}
    </div>
  );
};
