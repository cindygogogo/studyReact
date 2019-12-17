/**
 * Created by cindyWei on 2019/12/12.
 */
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from './actionTypes'
// import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getAddItemAction = (value) => ({
    type: ADD_TODO_ITEM
})
export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

// export  const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('http://mock-api.com/Rz317OnM.mock/api/todolist')
//             .then((res) => {
//                 console.log(res.data)
//                 const data = res.data
//                 const action = initListAction(data)
//                 dispatch(action)
//             })
//             .catch( () => {alert('error')})
//     }
// }
export const getInitList = () => ({
    type: GET_INIT_LIST
})