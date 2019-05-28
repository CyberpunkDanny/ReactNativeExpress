import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, AsyncStorage } from 'react-native'

import InputBoxAsyncStorage from './InputBoxAsyncStorageComponent'

const STORAGE_KEY = 'KEY_NAME'

export default class AsyncStorageDemo extends Component{
	
	constructor(props){
		super(props)
		this.state = {
			userName: "User"
		}
	}
	
	componentWillMount(){
		this.onLoading()
	}
	
	onLoading = async ()=>{
		await AsyncStorage.getItem(STORAGE_KEY)
		.then((name)=>{
			this.setState({userName: name})
		})
		.catch((error)=>{
			console.log('Failed to load name')
		})
	}
	
	onInputName = async (name)=>{
		await AsyncStorage.setItem(STORAGE_KEY, name)
		.then(()=>{
			this.setState({userName: name})
		})
		.catch((error)=>{
			console.log('Failed to save name')
		})
	}
	
	render(){
		return(
			<View style={{flex:1, paddingTop: Platform.OS === 'ios'? 0:Expo.Constants.statusBarHeight}}>
				<InputBoxAsyncStorage 
					placeholderText={'Type your name, submit and refresh!'} 
					onSubmitName={(name)=>this.onInputName(name)}
				/>
				<Text style={styles.text}>Hello {this.state.userName}!</Text>
			</View>
		)
	}
}


const styles = StyleSheet.create({
  text: {
    padding: 15,
    backgroundColor: 'skyblue',
  },
})
