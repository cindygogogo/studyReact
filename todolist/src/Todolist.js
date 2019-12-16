/**
 * Created by cindyWei on 2019/11/27.
 */
// eslint-disable-next-line
import React, {Fragment, Component} from 'react';
// 一般倾向先引入组件，再引入样式
import TodoItem from './TodoItem'
// import axios from 'axios'
// import './style.css'
import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from './store/actionCreators'
import TodoListUI from './TodolistUI'
// Fragment 占位符 消除最外层div
class Todolist extends React.Component{
    // 组件一常见自动执行
    constructor (props) {
        super(props)
        // 当组件的state或者props发生改变时，render函数就会重新执行
        // this.state = {
        //     inputValue: '',
        //     list: []
        // }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        this.state = store.getState()
        store.subscribe(this.handleStoreChange)
        // 组件初始化的时候修改this绑定
    }
    // 在组件即将被挂载到页面的时刻自动执行
    UNSAFE_componentWillMount () {
        // console.log('componentWillMount')
    }
    // 数据变化自动执行（页面渲染）
    render() {
        // console.log('render')
        return <TodoListUI
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            handleItemDelete={this.handleItemDelete}
        />
    }
    // 组件被挂载到页面之后，自动执行
    componentDidMount () {
        const action = getTodoList()
        store.dispatch(action)
        console.log(action)
    }
    // 组件被更新之前会会自动执行
    // shouldComponentUpdate () {
    //     // console.log('shouldComponentUpdate')
    //     // return true
    // }
     // 组件被更新之前，它会自动执行，但是它在shouldComponentUpdate ()之后被执行
    // 如果shouldComponentUpdate () return true，这个函数才会被执行
    // 如果shouldComponentUpdate () return false，这个函数就不会被执行了
    UNSAFE_componentWillUpdate () {
        // console.log('componentWillUpdate')
    }
    // 组件更新完成之后会自动执行
    componentDidUpdate () {
        // console.log('componentDidUpdate')
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
                    deleteItem={this.handleItemDelete(index)}
                />
            )
        })
    }
    handleInputChange(e) {
        // 异步，虚拟DOM知识点
        // （当把一个对象变成函数的时候，报错，在外层把变量保存，然后在内层使用）
        // const value = e.target.value
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
        // const value = this.input.value
        // this.setState( () => ({
        //     inputValue: value
        // }) )
    }
    handleStoreChange () {
        this.setState(store.getState())
        // console.log('change')
    }
    handleBtnClick () {
        // this.setState((prevState) => ({
        //     list: [...prevState.list, prevState.inputValue],
        //     inputValue: ''
        // }), () => {
        //     // console.log(this.ul.querySelectorAll('div').length)
        // })
        // 在setState【异步】运行之前执行，这么写是错的
        // console.log(this.ul.querySelectorAll('div').length)
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleItemDelete (index) {
        // immutable
        // state 不允许做任何的改变
        // this.setState((prevState)=>{
        //     const list = [...prevState.list]
        //     list.splice(index, 1)
        //     return { list }
        // })
        console.log('===', index)
         const action = getDeleteItemAction(index)
        console.log(index, action)
        store.dispatch(action)
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

// 4-7 ref
// 1。在react中为了获取dom元素 使用ref，react是数据驱动，因此尽量避免直接操作dom元素
// 2。但是在复杂业务场景中，不得不使用。当ref和setState一起使用的时候，要注意setState是异步的
// 页面，要把操作dom的语法放在setState的第二个参数的函数里面。
