import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './reduxindex';

// import axios from "axios"
import * as serviceWorker from './serviceWorker';



import {rdfun} from "./reduxss/reducer"
import {createStore} from 'redux'
var store=createStore(rdfun)
console.log(store);


store.subscribe(function(){
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));

})

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
