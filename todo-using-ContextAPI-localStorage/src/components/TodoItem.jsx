import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
          className={`flex backdrop-blur-md rounded-lg px-4 py-3 gap-x-3 shadow-lg transition-all duration-300 ${
            todo.completed 
              ? "bg-black/50 text-white/50" 
              : "bg-white/10 text-white"
          }`}
        >
          <input
            type="checkbox"
            className="cursor-pointer accent-white/80 h-5 w-5"
            checked={todo.completed}
            onChange={toggleCompleted}
          />
          <input
            type="text"
            className={`border outline-none w-full bg-transparent rounded-lg transition-all duration-300 ${
              isTodoEditable ? "border-white/20 px-2" : "border-transparent"
            } ${todo.completed ? "line-through" : ""}`}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
          />
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-white/20 justify-center items-center bg-white/10 hover:bg-white/20 transition-all duration-300 shrink-0 disabled:opacity-50"
            onClick={() => {
              if (todo.completed) return;
              if (isTodoEditable) {
                editTodo();
              } else setIsTodoEditable((prev) => !prev);
            }}
            disabled={todo.completed}
          >
            {isTodoEditable ? "📁" : "✏️"}
          </button>
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-white/20 justify-center items-center bg-white/10 hover:bg-white/20 transition-all duration-300 shrink-0"
            onClick={() => deleteTodo(todo.id)}
          >
            ❌
          </button>
        </div>
      )
}

export default TodoItem;

