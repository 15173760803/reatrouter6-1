import React, { Component } from 'react'

export default class a2 extends Component {

    funa(){
        this.props.history.push("/a4/我是a2页面js传过来的数据");
    }

    render() {
        return (
            <div>
                 一级路由2page
                 <button onClick={this.funa.bind(this)}>按钮js跳转</button>
            </div>
        )
    }
}
