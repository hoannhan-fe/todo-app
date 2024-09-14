import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getTodos, saveTodos } from '../utils/localStorage';

function useTodos() {
  const [todos, setTodos] = useState(() => getTodos());

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: uuidv4(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return { todos, addTodo, toggleComplete, deleteTodo };
}

export default useTodos;