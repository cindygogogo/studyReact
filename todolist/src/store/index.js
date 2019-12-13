/**
 * Created by cindyWei on 2019/12/11.
 */
// 创建store 小本子
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store