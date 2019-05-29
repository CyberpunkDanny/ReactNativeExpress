import React, { Component } from 'react' 

import { store } from './configureStoreFetchAPI'
import { Provider } from 'react-redux'

import FetchAPIRedux from './FetchAPIReduxComponent'


export default class MainFetch extends Component{
	render(){
		return(
			<Provider store={store}>
				<FetchAPIRedux />
			</Provider>
		)
	}
}
