import React, { Component } from 'react';
import { View, Text, Platform, AsyncStorage } from 'react-native';

import TitleBox from './TitleBoxComponent';
import InputBox from './InputBoxComponent';
import ListBox from './ListBoxComponent';

const STORAGE_KEY = 'TODO_ARR'

export default class ToDoApp extends Component{
    constructor(props){
        super(props);
        this.state={
            toDoList: []
        }
    }
    
	componentWillMount(){
		this.onLoading()	
	}
	
	onLoading = async ()=>{
		await AsyncStorage.getItem(STORAGE_KEY)
		.then((listFromStorage)=>{
			if(listFromStorage !== null){
				this.setState({toDoList: JSON.parse(listFromStorage)})
				console.log('List Retrieved')
			}
		})
		.catch((error)=>{
			console.error('Failed to retrieve the list')
		})
	}
	
	saveToDoListToDevice = (toDoListToSave)=>{
		AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toDoListToSave))
		.then(()=>{
			console.log('List Updated')
		})
		.catch((error)=>{
			console.log('Failed to update the list')
		})
	}
	
    addToDoList = (task)=>{
		this.setState({toDoList: [...this.state.toDoList, task]})
		this.saveToDoListToDevice(this.state.toDoList)
    }
    
    deleteTask = (taskId)=>{
        this.setState({toDoList: 
                       this.state.toDoList.filter((task, index)=>{
                           return (index.toString() !== taskId)
                       })
                    })
		this.saveToDoListToDevice(this.state.toDoList)
    }
    
    render(){
      return(
        <View style={{flex:1, paddingTop: Platform.OS === 'ios'? 0 : Expo.Constants.statusBarHeight}}>
          <TitleBox title={'To-Do List'}/>
          <InputBox placeholderText={'Type a task and hit enter!'} onSubmitTask={(task)=>this.addToDoList(task)}/>
          <ListBox tasks={this.state.toDoList} onDelTaskProp={(taskId)=>this.deleteTask(taskId)}/>
        </View>
      )
    }
}