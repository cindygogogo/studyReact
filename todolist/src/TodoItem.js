// eslint-disable-next-line
import React, { Component } from 'react'

class TodoItem extends React.Component{
    render () {
        return <div onClick={this.handleClick}>{this.props.content}</div>
    }
    handleClick () {
        alert(1)
    }

}

export default TodoItem

// 1。父--->子
// 父组件通过属性的形式向子组件传递数据
// 子组件通过this.props中对应的属性获取内容
// 2。子组件调用父组件的方法，修改父组件的内容