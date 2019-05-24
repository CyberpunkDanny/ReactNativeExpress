import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';

import TitleBox from './TitleBoxComponent';
import InputBox from './InputBoxComponent';
import ListBox from './ListBoxComponent';

export default class ToDoApp extends Component{
    constructor(props){
        super(props);
        this.state={
            toDoList: []
        }
    }
    
    addToDoList = (task)=>{
        this.setState({toDoList: [...this.state.toDoList, task]})
    }
    
    deleteTask = (taskId)=>{
        this.setState({toDoList: 
                       this.state.toDoList.filter((task, index)=>{
                           return (index.toString() !== taskId)
                       })
                    })
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