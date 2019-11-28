// eslint-disable-next-line
import React, { Component } from 'react'

class TodoItem extends React.Component{
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render () {
        return <div onClick={this.handleClick}>{this.props.content}</div>
    }
    handleClick () {
       this.props.deleteItem(this.props.index)
    }

}

export default TodoItem

// 如何拆分组件
// todoItem 按照react的写法写

// 父子组件如何传值，通过标签疏星的方式传递，既可以传递数据又可以传递方法
// 父子组件的关系（组件是一个树形的结构）
// 1。父--->子
// 父组件通过属性的形式向子组件传递数据
// 子组件通过this.props中接收传递过来的方法和数据
// 2。子组件调用父组件的方法，修改父组件的内容
// this.props.func()就可以调用父组件的方法，父组件传递的函数 this指向要做绑定，借助这个方法对父组件的数据进行修改
// 数据修改，页面变化（自动修改dom）