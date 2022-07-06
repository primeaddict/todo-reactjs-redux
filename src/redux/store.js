import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';


import reducer from "./reducer";
import rootSaga from "./sagas"

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
let middlewareArray = [sagaMiddleware];
const middleWareEnhancers = applyMiddleware(...middlewareArray);
const enhancers = [middleWareEnhancers];

const composedEnhancers = composeWithDevTools(...enhancers);


const store = createStore(reducer, composedEnhancers)

sagaMiddleware.run(rootSaga)

export default store