import React, { Component } from 'react' 

import { store, persistor } from './configureStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import ToDoListApp from './ToDoListAppComponent'


export default class MainComponent extends Component{
	render(){
		return(
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ToDoListApp />
				</PersistGate>	
			</Provider>
		)
	}
}
