import React, { Component } from 'react'

import { store, actionTypes, addTask, delTask } from './configureStore'
import ToDoListReduxApp from './ToDoListReduxAppComponent'

export default class Main extends Component{
    render(){
        return(
            <ToDoListReduxApp store={store}/>
        )
    }
}