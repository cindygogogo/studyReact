/**
 * Created by cindyWei on 2019/12/11.
 */
// 创建store 小本子
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
// import thunk from 'redux-thunk'
import todoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSagas)

export default store
// https://github.com/zalmoxisus/redux-devtools-extension