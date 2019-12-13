/**
 * Created by cindyWei on 2019/12/13.
 */
import React, { Component } from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Input, Button, List } from 'antd';

class TodolistUI extends  Component{
    render() {
        return (
            <div>
                <div>
                    <Input value={this.props.inputValue}
                        placeholder={'to do info'}
                        style={{width: '300px', marginRight: '10px'}}
                        onChange={this.props.handleInputChange}
                    />
                    <Button onClick={this.props.handleBtnClick} type="primary">提交</Button>
                </div>
                <List
                    style={{width: '300px', marginTop: '10px'}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={item => (
                        <List.Item onClick={(index) => {
                            this.props.handleItemDelete(index)
                        }}>{item}</List.Item>
                    )}
                />
            </div>
        )
    }

}
export default TodolistUI;