import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';
import { Provider } from 'react-redux'
import store from './store'
// const App = (
//     <Provider store={store}>
//         <Todolist/>
//     </Provider>
// )

// Provider提供器连接了store，那么provider里面所有的组件都有能力获取到store里面的数据
ReactDOM.render(
    <Provider store={store}>
        <Todolist/>
    </Provider>, document.getElementById('root'));

