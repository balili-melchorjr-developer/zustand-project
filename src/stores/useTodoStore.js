import { create } from "zustand";

//Define zustand store

export const useTodoStore = create((set) => ({
    todos: ['Test'],
    addTodo: (todo) => set((state) => ({todos: [...state.todos, todo]}))
}))