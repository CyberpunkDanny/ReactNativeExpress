import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
	isLoading: true,
	isError: false,
	posts: []
}

export const actionTypes = {
	FETCH_POSTS_REQ: 'FETCH_POSTS_REQ',
	FETCH_POSTS_RESP: 'FETCH_POSTS_RESP',
	CLEAR_POSTS: 'CLEAR_POSTS' 
}

const reducer = (state=initialState, action)=>{
	switch(action.type){
		case actionTypes.FETCH_POSTS_REQ:
			return {...state, isLoading: true, isError: false}
		
		case actionTypes.FETCH_POSTS_RESP: {
			if(action.error){
				return {...state, isLoading: false, isError: true, }
			}
			else return {
						 ...state, 
						 isLoading: false, 
						 isError: false, 
						 posts: action.payload
						}
		}
		
		case actionTypes.CLEAR_POSTS:
			return {...state, isLoading: false, isError: false, posts: []}
			
		default: 
			return state
	}
}

export const store = createStore(reducer, initialState, applyMiddleware(thunk))

/* Defining Thunk which will dispatch actions */
/* Return a function when we dispatch a function */

export const fetchPosts = ()=> async (dispatch, getState)=> {
	dispatch({type: actionTypes.FETCH_POSTS_REQ})
	
	return await fetch('https://jsonplaceholder.typicode.com/posts')
	.then(async (response)=>{
		if(response.ok){
			const posts = await response.json()
			dispatch({type: actionTypes.FETCH_POSTS_RESP, payload: posts})
		}
		else {
			var error = new Error('Error '+ response.status+ ': '+ response.statusText)
			error.response = response
			throw error
		}
	})
	.catch((err)=>{
		console.log(err)
		dispatch({type: actionTypes.FETCH_POSTS_RESP, payload: err, error: true})
	})
}

export const clearPosts = ()=> async (dispatch, getState)=> {
	if(getState().posts.length > 0)
		dispatch({type: actionTypes.CLEAR_POSTS})
}