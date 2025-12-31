import "./App.css";
import Header from "./components/Header";
import { Todos } from "./components/Todos";
import { TodoItem } from "./components/TodoItem";
import { Footer } from "./components/Footer";
import { AddTodo } from "./components/AddTodo";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  useEffect(() => {
    document.title = "MyTodoList";
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    // console.log("onDelete Clicked",todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    // Prevent empty title or desc
    if (!title.trim() || !desc.trim()) {
      alert("Title and Description cannot be empty!");
      return;
    }

    // Check for duplicates
    const isDuplicate = todos.some(
      (todo) => todo.title.toLowerCase() === title.toLowerCase()
    );

    if (isDuplicate) {
      alert("This todo already exists!");
      return;
    }

    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <Header title="My ToDo List" searchBar={false} />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Todos todos={todos} onDelete={onDelete} />
              <AddTodo addTodo={addTodo} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
