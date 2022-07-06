import { all, call, delay, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { todoSagas } from './todo'



export default function* rootSagas() {
    yield all({
        ...todoSagas
    })
}