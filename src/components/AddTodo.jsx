import React, { useState } from 'react'
import { useTodoStore } from '../stores/useTodoStore'

const AddTodo = () => {
    const[newTodo, setNewTodo] = useState("")
    const addTodo = useTodoStore((state) => state.addTodo)
    
    const handleClick = () => {
        addTodo(newTodo)
        setNewTodo("")
    }
  return (
    <div>
        <input type='text' value={newTodo} onChange={(event) => setNewTodo(event.target.value)} /> 
        <button onClick={handleClick}>Add Todo</button>
    </div>
  )
}

export default AddTodo