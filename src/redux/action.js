import { TODO_ADD, TODO_REMOVE, TODO_SELECT } from "./types"

export const a__addTodo = (todo) => {
    return ({
        type: TODO_ADD,
        payload: todo
    })
}

export const a__removeTodo = (id) => {
    return ({
        type: TODO_REMOVE,
        payload: id
    })
}

export const a__selectTodo = (id) => {

    return ({
        type: TODO_SELECT,
        payload: id
    })
}