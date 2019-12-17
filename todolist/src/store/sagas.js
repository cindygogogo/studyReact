import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
import { initListAction } from './actionCreators'
function* getInitList() {
    try{
        const res = yield axios.get('http://mock-api.com/Rz317OnM.mock/api/todolist')
        const action = initListAction(res.data)
        yield put(action)
    } catch(e) {
        console.log('网络请求失败')
    }
}

// generator 函数
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;