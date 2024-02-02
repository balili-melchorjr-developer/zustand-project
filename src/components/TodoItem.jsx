import React from 'react'
import { useTodoStore } from '../stores/useTodoStore'

const TodoItem = ({ todo }) => {
    const removeTodo = useTodoStore((state) => state.removeTodo)
  return (
    <div>
        <span>{ todo }</span>
        <button onClick={() => removeTodo(todo)}>Remove</button>
    </div>
  )
}

export default TodoItem