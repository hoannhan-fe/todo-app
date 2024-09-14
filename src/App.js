import React from 'react';
import TodoForm from './components/toDofrom';
import TodoList from './components/toDolist';
import useTodos from './hooks/useTodo';


function App() {
  const { todos, addTodo, toggleComplete, deleteTodo } = useTodos();

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">To-do List</h1>
          <TodoForm addTodo={addTodo} />
          <TodoList 
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;