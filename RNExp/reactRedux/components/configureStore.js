import { createStore } from 'redux'

export const actionTypes = {
	ADD_TASK: 'ADD_TASK',
	DEL_TASK: 'DEL_TASK'
}

const initialState = {
	toDoList: []
}

const reducer = (state=initialState, action)=>{
	switch(action.type){
		case actionTypes.ADD_TASK:
			return {...state, toDoList: state.toDoList.concat(action.payload)}
		
		case actionTypes.DEL_TASK:
			return {...state, toDoList: state.toDoList.filter((task, id)=>{
							if(id.toString() !== action.payload){
								return true
							}
							else return false
						})
				   }
		
		default:
			return state;
	}
}

export const store = createStore(reducer, initialState)

/* Action Creators */

export const addTask = (task)=>{
	return {
		type: actionTypes.ADD_TASK,
		payload: task
	}
}

export const delTask = (taskId)=>{
	return {
		type: actionTypes.DEL_TASK,
		payload: taskId
	}
}