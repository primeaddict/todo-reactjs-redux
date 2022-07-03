import { createSlice } from "@reduxjs/toolkit"

const getListFromLocal = () => {
    return (localStorage && JSON.parse(localStorage.getItem("list"))) || []
}

const initialState = {
    todos: getListFromLocal(),
    editTodo: {}
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addOrEditTodoReducer: (state, action) => {
            let existingTodo = state.todos.find(todo => todo.id !== action.payload.id);
            existingTodo = action.payload
            return state
        },
        removeTodoReducer: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
            return state
        },
        selectTodoReducer: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id)
                    todo.isSelected = !todo.isSelected
                return todo
            })
            return state
        },
        deleteSelectedTodosReduces: (state) => {
            state.todos = state.todos.filter(todo => (!todo.isSelected))
            return state
        }
    }
})

export const { addOrEditTodoReducer, removeTodoReducer, selectTodoReducer, deleteSelectedTodosReduces } = todoSlice.actions

export default todoSlice.reducer