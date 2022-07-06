import { combineReducers } from "redux";
import { SUCCESS, REQUEST } from "../types/actionTypes";
import { TODO_ADD, TODO_REMOVE, TODO_SELECT, TODO_EDIT } from "../types/types";

const getListFromLocal = () => {
    return {
        todos: (localStorage && JSON.parse(localStorage.getItem("list"))) || [],
        loading: false
    }
}


const initialState = getListFromLocal()

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case TODO_ADD[SUCCESS]: {

            let oldTodo = state.todos.find(todo => (todo.id == action.payload.todo.id)) || false;
            let newList = state.todos

            if (oldTodo) {
                newList = state.todos.map(todo => {
                    if (todo.id == action.payload.todo.id) {
                        return action.payload.todo
                    }
                    return todo
                })
            } else {
                newList.push(action.payload.todo)
            }

            return ({
                loading: false,
                todos: newList
            })
        }
        case TODO_ADD[REQUEST]: {
            return ({
                ...state,
                loading: true
            })
        }
        case TODO_REMOVE: {
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) }
        }
        case TODO_SELECT: {
            const newList = state.todos.map(todo => {
                if (todo.id == action.payload) return { ...todo, isSelected: !!!todo.isSelected }
                return todo
            })
            console.log("🚀 ~ file: index.js ~ line 39 ~ reducer ~ newList", newList)

            return { ...state, todos: newList }
        }
        case TODO_EDIT: {
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id == action.payload.todo.id) {
                        return action.payload.todo
                    }
                    return todo
                })
            }
        }
        default: {
            return state
        }
    }
}

export default reducer