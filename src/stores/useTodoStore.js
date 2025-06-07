import { create } from "zustand";

//Define zustand store

export const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (todo) => set((state) => ({todos: [...state.todos, todo]})),
    removeTodo: (todo) => set((state) => ({todos: state.todos.filter((t) => t !== todo)}))
}))