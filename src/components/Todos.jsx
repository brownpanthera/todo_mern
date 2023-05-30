import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  function addTodo(e) {
    e.preventDefault();
    if(!todoText) return;
    setTodos([...todos, todoText]);
    setTodoText('');
  }

  return (
    <div className="flex flex-col items-center">
    <form onSubmit={addTodo} className="mb-4">
      <div className="flex">
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          type="text"
          className="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your todo"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
        >
          Add Todo
        </button>
      </div>
    </form>
  
    <ul className="w-full flex flex-col items-center">
      {todos.map((todo, index) => (
        <li key={index} className="border-b border-gray-300 py-2 px-4">{todo}</li>
      ))}
    </ul>
  </div>
  
  );
}
