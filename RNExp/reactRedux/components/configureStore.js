import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'

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

const config = {
        key: 'root',
        storage,
        debug: true
}

export const store = createStore(persistReducer(config, reducer), initialState)

/* Enabling Persistence */
export const persistor = persistStore(store)

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