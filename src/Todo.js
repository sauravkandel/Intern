import React, { useState, useEffect } from 'react';
import './Todo.css';

function Todo() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      if (editIndex === -1) {
        setTodos([...todos, inputValue]);
      } else {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = inputValue;
        setTodos(updatedTodos);
        setEditIndex(-1);
      }
      setInputValue('');
    }
  };

  const handleEditTodo = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="Todo">
      <h1>Todo List</h1>
      <div className="Todo-input">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>{editIndex === -1 ? 'Add' : 'Save'}</button>
      </div>
      <ul className="Todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="Todo-item">
            <div>{todo}</div>
            <div className="Todo-item-buttons">
              <button onClick={() => handleEditTodo(index)}>Edit</button>
              <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
