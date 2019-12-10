import React, {Component, Fragment} from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group'
// 当CSSTransition实现不了的时候，就用Transition实现
// docs：https://reactcommunity.org/react-transition-group/transition
import './style.css'
// function App() {
//   return (
//     <div>
//         hello word
//     </div>
//   );
// }
class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            list: []
        }
        this.handleToggole = this.handleToggole.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)
    }
    render() {
        return (
            <Fragment>
                {/*<div className={this.state.show ? 'show' : 'hide'}>hello App</div>*/}
                {/*<CSSTransition*/}
                    {/*in={this.state.show}*/}
                    {/*timeout={1000}*/}
                    {/*classNames='fade'*/}
                    {/*unmountOnExit*/}
                    {/*// 入场动画结束之后*/}
                    {/*onEntered={(el) => {el.style.color = 'blue'}}*/}
                    {/*// 第一次显示hello的时候，增加一个class fade-active*/}
                    {/*appear={true}*/}
                {/*>*/}
                    {/*<div>hello App</div>*/}
                {/*</CSSTransition>*/}
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) =>{
                            return (
                                <CSSTransition
                                    timeout={1000}
                                    classNames='fade'
                                    unmountOnExit
                                    // 入场动画结束之后
                                    onEntered={(el) => {el.style.color = 'blue'}}
                                    // 第一次显示hello的时候，增加一个class fade-active
                                    appear={true}
                                    key={index}
                                >
                                    <div>{item}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>

                <button onClick={this.handleAddItem}>toggole</button>
            </Fragment>
        )
    }
    handleToggole() {
        this.setState({
            show: this.state.show ? false : true
        })
    }
    handleAddItem() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, '这是添加的～～～']
            }
        })
    }
    // docs:https://reactcommunity.org/react-transition-group/transition-group
}
export default App;
