import React, { Component } from 'react'
import {ADD,DEL} from './reduxss/action'
export default class reduxindex extends Component {
    addfun(){
        this.props.store.dispatch({type:ADD,data:1});
        console.log("111");
    }
    delfun(){
        this.props.store.dispatch({type:DEL,data:1});
        console.log("222");
    }
    render() {
        return (
            <div>
                <h1>{this.props.store.getState()}</h1>
                <button onClick={this.addfun.bind(this)}>+++++</button>
                <button onClick={this.delfun.bind(this)}>-----</button>
            </div>
        )
    }
}
