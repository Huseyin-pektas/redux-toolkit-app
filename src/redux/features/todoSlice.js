import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            owner: "Ahmet",
            title: "Anasayfa komponenti yapmak",
            isDone: false,
            date: "5 temmuz 2024 13:00",
            targetHours: 2
        },
        {
            id: 2,
            owner: "Selim",
            title: "React Router kurlumu yapmak",
            isDone: false,
            date: "5 temmuz 2024 13:00",
            targetHours: 4
        }, {
            id: 3,
            owner: "nutuya",
            title: "RTK Kurulumu yapmak",
            isDone: false,
            date: "5 temmuz 2024 13:00",
            targetHours: 6
        }
    ]
}
// 1.aşama= slice ve yapılacak fonksiyonları oluşturduk
export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducer: {
        addTodo: (state, action) => {
            state.todos = state.action
        },
        removeTodo: (state, action) => {
            state.todos = state.action
        },
        clearTodo: (state, action) => {
            state.todos = []
        }

    }
})
// 2. aşama = fonksiyonları ve todoSlice yi export etmemiz lazım

export const { } = todoSlice.actions
export default todoSlice.reducer