import React, { useState } from 'react';
import './App.css';

function App() {
  let [todoInput, updatedInput] = useState("");
  let [todoList, updatedTodos] = useState([
    {
      id: 1,
      task: "Dinesh"
    },
    {
      id: 2,
      task: "Dileep"
    }
  ]);

  function addNewTodo() {
    if (todoInput.trim() === "") {
      alert('Enter a Text');
    } else {
      let newTodos = [
        ...todoList,
        {
          id: todoList.length + 1, // Using length+1 for id increment
          task: todoInput
        }
      ];
      updatedTodos(newTodos);
      updatedInput(""); // Clear the input field
    }
  }

  function deleteTodo(id) {
    let filterdTodos = todoList.filter(
      (todo) => {
        return(todo.id !== id)
      }
    )
    updatedTodos(filterdTodos)

  }

  return (
    <div className="container">
      <h3 className='text-center'>Todo App Using React</h3>
      <div className="input-group mt-4">
        <input
          className='form-control'
          type="text"
          value={todoInput} // Binding the input field to todoInput
          onChange={(e) => updatedInput(e.target.value)} // Update state on input change
        />
        <button onClick={addNewTodo} className='btn btn-primary'>Add</button>
      </div>

      <ul className='list-group mt-4'>
        {todoList.map((todo) => (
          <li key={todo.id} className='list-group-item'>
            <p>{todo.task}</p>
            <button onClick={() => {
              deleteTodo(todo.id)
            }} className='btn delete-btn'>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
