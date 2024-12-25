import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault();

        if(!todo) return

        addTodo({todo:todo, completed: false})
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
          <input
            type="text"
            placeholder="Add a task..."
            className="w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 outline-none focus:bg-white/20 transition-all duration-300 text-white placeholder:text-white/50"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" 
            className="rounded-r-lg px-6 py-2 bg-white/20 hover:bg-white/30 text-white transition-all duration-300 font-light">
            Add
          </button>
        </form>
    )
}

export default TodoForm;


