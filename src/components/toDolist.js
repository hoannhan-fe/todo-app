import React from 'react';
import TodoItem from './toDoitem.js';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul className="space-y-3">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;