import React, { Component } from 'react' 

import { store } from './configureStore'
import { Provider } from 'react-redux'

import ToDoListApp from './ToDoListAppComponent'


export default class MainComponent extends Component{
	render(){
		return(
			<Provider store={store}>
				<ToDoListApp />
			</Provider>
		)
	}
}
