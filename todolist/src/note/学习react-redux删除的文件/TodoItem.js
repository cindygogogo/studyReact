// eslint-disable-next-line
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component{
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    // state 或者 props变化时render会执行
    // 父组件的render重新执行的的时候，子组件的render函数就会被执行（性能损耗）
    render () {
        console.log('child render')
        const { content } = this.props
        // return React.createElement('div', {}, 'item')
        return (
            // JSX -> React.createElement  -> 虚拟DOM (JS 对象 )-> 真实的DOM
                <li onClick={this.handleClick}>
                    {content}
                </li>
            )

    }
    // 组件被更新之前会会自动执行
    shouldComponentUpdate (nextProps, nextState) {
        // 提升性能，避免组件无谓的render渲染
        // console.log('child shouldComponentUpdate')
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }
    // 当一个组件从父组件接受一个参数
    // 只要父组件的render函数重新被执行，子组件的这个生命周期函数就会被执行
    // 换一种说法
    // 如果这个组件第一次存在与父组件中，不会执行
    // 如果这个组件之前已经存在父组件中，才会执行
    UNSAFE_componentWillReceiveProps () {
        // console.log('child componentWillReceiveProps')
    }
    // 当这个组件即将被从页面中剔除的时候，会被执行
    componentWillUnmount () {
        // console.log('child componentWillUnmount')
    }
    handleClick () {
        const { deleteItem, index } = this.props
        deleteItem(index)
    }

}

TodoItem.propTypes = {
    // test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number,
}

TodoItem.defaultProps = {
    // test: 'hello world'
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


// 4-2 组件接收参数的时候如何做校验，如何设置默认值？
// PropTypes:参数类型、校验,DefaultProps:设置默认值
// 官方文档：https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html



