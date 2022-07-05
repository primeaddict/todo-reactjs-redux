import { combineReducers } from "redux";
import { TODO_ADD, TODO_EDIT, TODO_REMOVE, TODO_SELECT } from "./types";

const getListFromLocal = () => {
    return (localStorage && JSON.parse(localStorage.getItem("list"))) || []
}


const initialState = getListFromLocal()

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ADD: {
            if (action.payload.id)
                return [...state, action.payload]
            else
                return state
        }
        case TODO_REMOVE: {
            return state.filter(todo => todo.id !== action.payload)
        }
        case TODO_SELECT: {
            console.log(action.payload)
            let newState = state.map(todo => {
                if (todo.id == action.payload) return { ...todo, isSelected: !!!todo.isSelected }
                return todo
            })
            return newState
        }
        case TODO_EDIT: {
            return state.map(todo => {
                if (todo.id == action.payload.id) {
                    return action.payload
                }
                return todo
            })
        }
        default: {
            return state
        }
    }
}

export default reducer