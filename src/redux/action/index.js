import { REQUEST } from "../types/actionTypes";
import { TODO_ADD, TODO_REMOVE, TODO_SELECT } from "../types/types"


export const action = (type, payload = {}) => {
    return { type, ...payload };
};

export const a__addTodo = {
    request: todo => action(TODO_ADD[REQUEST], { todo })
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