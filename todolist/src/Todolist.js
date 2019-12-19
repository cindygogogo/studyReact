/**
 * Created by cindyWei on 2019/12/17.
 */
import  React from 'react'
import {connect} from 'react-redux'
// 如果一个组件只有render方法 可以把它写成 UI 组件，无状态组件（性能好-无任何生命周期函数，不会生成真正的组件实例）（函数）
const TodoList = (props) => {
    const { inputValue, list, handleClick, changeInputValue } = props
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue}/>
                <button onClick={handleClick}>submmit</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return   <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}
// class Todolist extends Component{
//     render() {
//         const { inputValue, list, handleClick, changeInputValue } = this.props
//         return (
//             <div>
//                 <div>
//                     <input value={inputValue} onChange={changeInputValue}/>
//                     <button onClick={handleClick}>submmit</button>
//                 </div>
//                 <ul>
//                     {
//                         list.map((item, index) => {
//                             return   <li key={index}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }
// store里面的数据和组件里面的数据 的关系在 mapStateProps里面列清楚
// connect  在todolist和store中做了连接，想拿到store里面的数据，只要在mapStateProps做映射即可
const mapStateProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
// 同store里面的数据、store.dispatch做关联---mapDispatchToProps 返回的对象做关联
// 调用dispatch的方法去操作store里面的数据
// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
    return{
        changeInputValue(e){
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        },
        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        }
    }
}
// （连接的规则）（组件）
// todolist是一个UI组件，connect把这个业务逻辑和UI组件相结合，执行返回的结果是一个容器组件
// 导出一个容器组件
export default  connect(mapStateProps, mapDispatchToProps)(TodoList)