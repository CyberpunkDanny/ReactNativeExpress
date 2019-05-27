import React, { Component } from 'react'
import { View, Platform } from 'react-native'

import { addTask, delTask } from './configureStore'

import TitleBox from './TitleBoxReduxComponent';
import InputBox from './InputBoxReduxComponent';
import ListBox from './ListBoxReduxComponent';


export default class ToDoListReduxApp extends Component{
    
	constructor(props){
		super(props);
		this.state = {
			toDoList: []
		}
	}
	
	componentWillMount(){
		this.setState({ toDoList: this.props.store.getState()})
		
		this.unsubscribe = this.props.store.subscribe(() => {
      		this.setState({ toDoList: this.props.store.getState()})
    	})
	}
	
	componentWillUnmount() {
    	this.unsubscribe()
	}
	
	addToDoList = (task)=>{
		this.props.store.dispatch(addTask(task))
	}
	
	deleteTask = (taskId)=>{
		this.props.store.dispatch(delTask(taskId))
	}
	
    render(){		
        return(
            <View style={{flex:1, paddingTop: Platform.OS === 'ios'? 0 : Expo.Constants.statusBarHeight}}>
				<TitleBox title={'To-Do List'} />
				<InputBox 
					placeholderText={'Type a task and hit enter!'}
					onSubmitTask={(task)=>this.addToDoList(task)}
				/>
				<ListBox 
					tasks={this.state.toDoList} onDelTaskProp={(taskId)=>this.deleteTask(taskId)}	
				/>
			</View>	
        )
    }
} 

