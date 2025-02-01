import React, { useState } from "react";
import useTodoStore from "../store/useTodoStore";

function Todo() {
  const [text, setText] = useState("");
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoStore();

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 p-6">
      <div className="w-[500px] bg-gray-800 p-6 rounded-xl shadow-2xl text-white">
        <h1 className="text-center text-3xl font-bold mb-4">📌 TODO LIST</h1>

        <form onSubmit={handleSubmit} className="flex mb-6 gap-2">
          <input
            type="text"
            placeholder="Enter todo..."
            className="flex-1 p-3 bg-gray-700 text-white rounded-lg border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-5 py-3 rounded-lg font-bold hover:bg-green-600 transition active:scale-95"
          >
            ADD
          </button>
        </form>

        <ul className="flex flex-col gap-3">
          {todos.length === 0 ? (
            <p className="text-center text-gray-400">No todos yet...</p>
          ) : (
            todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex justify-between items-center p-4 bg-gray-700 rounded-lg shadow-md transition-all ${
                  todo.completed ? "opacity-50" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="w-5 h-5 cursor-pointer"
                  />
                  <p
                    className={`text-lg transition-all ${
                      todo.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {todo.text}
                  </p>
                </div>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="text-red-500 text-xl hover:scale-110 transition-all"
                >
                  ❌
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
