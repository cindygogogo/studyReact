/**
 * Created by cindyWei on 2019/11/27.
 */
// eslint-disable-next-line
import React, {Fragment, Component} from 'react';
import './style.css'
import TodoItem from './TodoItem'

// Fragment 占位符 消除最外层div
class Todolist extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}/>
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                    <ul>
                      {
                        this.state.list.map((item, index) => {
                          return (
                            <div>
                              {/* <li
                          key={index}
                          onClick={this.handleItemDelete.bind(this, index)}
                          dangerouslySetInnerHTML={{__html: item}}
                      >
                      </li>*/}
                              <TodoItem
                                  content={item}
                                  index={index}
                                  deleteItem={this.handleItemDelete.bind(this)}
                              />
                            </div>

                          )
                        })
                      }
                    </ul>
                </div>
            </Fragment>
        );
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
        // console.log(this)
        // this.state.inputValue = e.target.value
        // console.log(e.target.value);
    }
    handleBtnClick () {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemDelete (index) {
        // immutable
        // state 不允许做任何的改变
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list,
        })
       // console.log(index)
    }
}

export default Todolist;

// JSX细节语法补充
// 1。如何在JSX的代码中编写注释
// {/*下面是一个input*/}
// {
//     //下面是一个input
// }
// 2. className 代替 class
// 3.动态渲染HTML(不希望自动被转译)
// dangerouslySetInnerHTML={{__html: item}}
// 4.label 增加for属性
// htmlFor