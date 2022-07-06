import { delay, put, takeEvery, } from 'redux-saga/effects'

import { REQUEST, SUCCESS } from '../types/actionTypes';
import { TODO_ADD } from '../types/types';

function* saveTodo(todo) {
    try {
        yield delay(Math.random() * 1000);
        yield put({ type: TODO_ADD[SUCCESS], payload: todo })
    } catch (error) {

    }

}

export const todoSagas = {
    watchAddTodo: takeEvery(TODO_ADD[REQUEST], saveTodo)
}