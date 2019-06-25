import React, { Component } from 'react'

export default class bc extends Component {
    componentWillMount() {
        console.log(this.props.location.state.id)
        console.log(this.props.location.state.name)
    }
    
    render() {
        return (
            <div>
                 二级路由c页面
            </div>
        )
    }
}
