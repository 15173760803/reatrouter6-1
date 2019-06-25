import React, { Component } from 'react'
import '../../css/a1css.css'
import Ba from '../zipage1/ba'
import Bb from '../zipage1/bb'
import Bc from '../zipage1/bc'
import Bd from '../zipage1/bd'

import {BrowserRouter,Route,NavLink} from 'react-router-dom'
export default class a1 extends Component {
 
    componentWillMount(){
        console.log(this.props.match.params.id);
        console.log("aaaaa")
    }
    
    render() {
        
        return (
            <div>
               
          a1页面
          <br/>
        <BrowserRouter>
              <NavLink to='/a1/ba' activeClassName="aa">a页面二级导航1</NavLink>&nbsp;&nbsp;
               <NavLink to='/a2/bb' activeClassName="aa">a页面二级导航2</NavLink>&nbsp;&nbsp;
               <NavLink to={{pathname:'/a3/bc',state:{id:'44',name:"二级路由query传参"}}}  activeClassName="aa">a页面二级导航3</NavLink>&nbsp;&nbsp;
               <NavLink to='/a4/bd'   activeClassName="aa">a页面二级导航4</NavLink>&nbsp;&nbsp;
    
              <Route path='/a1/ba' component={Ba}/>&nbsp;&nbsp;
               <Route path='/a2/bb' component={Bb}/>&nbsp;&nbsp;
               <Route path='/a3/bc' component={Bc}/>&nbsp;&nbsp;
               <Route path='/a4/bd' component={Bd}/>&nbsp;&nbsp;
         </BrowserRouter>
              
            </div>
        )
    }
}
