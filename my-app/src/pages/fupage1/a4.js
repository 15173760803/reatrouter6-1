import React, { Component } from 'react'

export default class a4 extends Component {
    componentWillMount(){
        console.log(this.props.match.params.id2);

    }
    
   

    render() {
        return (
            <div>
                 一级路由4page
            </div>
        )
    }
}
