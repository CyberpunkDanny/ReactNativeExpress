import React, { Component } from 'react'
import { View, Platform } from 'react-native'
import { connect } from 'react-redux'

import { addTask, delTask } from './configureStore'

import TitleBox from './TitleBoxComponent';
import InputBox from './InputBoxComponent';
import ListBox from './ListBoxComponent';

const mapStateToProps = (state)=>{
	return {
		toDoList: state.toDoList
	}
}

class ToDoListApp extends Component{
	constructor(props){
		super(props)
	}
	
	addToDoList = (task)=>{
		this.props.dispatch(addTask(task))
	}
	
	deleteTask = (taskId)=>{
		this.props.dispatch(delTask(taskId))
	}
	
	render(){
		return(
			<View style={{ flex:1, paddingTop: Platform.OS === 'ios'? 0 : Expo.Constants.statusBarHeight}}>
				<TitleBox title={'To-Do List'} />
				<InputBox 
					placeholderText={'Type a task and hit enter!'}
					onSubmitTask = {(task)=>this.addToDoList(task)}
				/>
				<ListBox 
					tasks={this.props.toDoList} 
					onDelTaskProp={(taskId)=>this.deleteTask(taskId)}
				/>
			</View>
		)
	}
}

export default connect(mapStateToProps)(ToDoListApp)