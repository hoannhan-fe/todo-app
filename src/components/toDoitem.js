import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={`flex items-center justify-between p-3 bg-gray-50 rounded-lg ${todo.completed ? 'line-through text-gray-500' : ''}`}>
      <span>{todo.text}</span>
      <div>
        <button 
          onClick={() => toggleComplete(todo.id)}
          className="mr-2 bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded text-sm transition duration-200"
        >
          Toggle
        </button>
        <button 
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded text-sm transition duration-200"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;