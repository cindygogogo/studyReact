/**
 * Created by cindyWei on 2019/11/27.
 */
// eslint-disable-next-line
import React, {Fragment, Component} from 'react';
// 一般倾向先引入组件，再引入样式
import TodoItem from './TodoItem'
import Test from './Test'
import './style.css'

// Fragment 占位符 消除最外层div
class Todolist extends React.Component{
    constructor (props) {
        super(props)
        // 当组件的state或者props发生改变时，render函数就会重新执行
        this.state = {
            inputValue: '',
            list: []
        }
        // 组件初始化的时候修改this绑定
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
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
                        onChange={this.handleInputChange}/>
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                  { this.getTodoItem() }
                </ul>
                <Test content={this.state.inputValue}/>
            </Fragment>
        );
    }
    getTodoItem () {
       return this.state.list.map((item, index) => {
            return (
                // key放在循环的最外层
                <TodoItem
                    // key->虚拟DOM
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleItemDelete}
                />
            )
        })
    }
    handleInputChange(e) {
        // 异步，虚拟DOM知识点
        // （当把一个对象变成函数的时候，报错，在外层把变量保存，然后在内层使用）
        const value = e.target.value
        this.setState( () => ({
            inputValue: value
        }) )
    }
    handleBtnClick () {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }
    handleItemDelete (index) {
        // immutable
        // state 不允许做任何的改变
        this.setState((prevState)=>{
            const list = [...prevState.list]
            list.splice(index, 1)
            return { list }
        })
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

// 围绕React衍生出的思考
// 1。react是声明式开发减少dom操作的代码量
// 与之对应的是命令式开发->直接操作dom jquery/原生
// 声明式开发：根据数据构建
// 2。可以与其他框架并存
// 只负责id=root部分的渲染 只管理自己管理的dom
// 3。组件化
// （1）组件定义：类通过继承React.Component -> class TodoItem extends React.Component
// （2）组件 首字母大写
// （3）树状结构：父组件通过属性给子组件传值，子组件操作父组件的数据：父组件传递一个方法，子组件调用这个方法间接传值
// （4）单向数据流，单向传递。子组件只能使用，不能修改
// （5）视图层框架，仅负责数据和页面渲染，大型项目的组件通信交给数据层框架比如Redux、flux
// （6）函数式编程：易维护、面向测试、

// 4-3 props，state与render函数的关系
// 理解为什么数据发生变化，
// 数据和页面进行联动，底层原理讲解
// 当组件的state或者props发生改变时，自己的render函数就会重新执行
// 当父组件的render函数被运行时，它的子组件的render都将被重新运行

