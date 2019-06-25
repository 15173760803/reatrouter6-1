import React, { Component } from 'react'

import A1 from '../pages/fupage1/a1'
import A2 from '../pages/fupage1/a2'
import A3 from '../pages/fupage1/a3'
import A4 from '../pages/fupage1/a4'


import {BrowserRouter,Route,Link} from 'react-router-dom'
export default class routerfu1 extends Component {
    render() {
        return (
            <div>
                <h1>一级导航路由</h1>
                 <BrowserRouter>
                 <Link to='/a1/123456'>一级导航a1</Link>
                 <Link to='/a2'>一级导航a2</Link>
                 <Link to='/a3'>一级导航a3</Link>
                 <Link to='/a4'>一级导航a4</Link>

                 <Route path="/a1/:id" component={A1}></Route>
                 <Route path="/a2" component={A2}></Route>
                 <Route path="/a3" component={A3}></Route>
                 <Route path="/a4/:id2" component={A4}></Route>
                 </BrowserRouter>
            </div>
        )
    }
}
