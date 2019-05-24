import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import { createStore } from 'redux'

const actionTypes = {
    INCREMENT: 'INCREMENT'
}

const reducer = (state, action)=>{
    if(action.type === actionTypes.INCREMENT){
        return {count: state.count=action.payload }
    }
        
    return state
}

const initialState = {
    count: 0
}

const store = createStore(reducer, initialState)
    
store.dispatch({type: actionTypes.INCREMENT, payload: 5})

store.dispatch({type: actionTypes.INCREMENT, payload: 15})

store.dispatch({type: actionTypes.INCREMENT, payload: 25})

export default class MinimalRedux extends Component{

    render(){
        return(
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios'? 0 : Expo.Constants.statusBarHeight }}>
                <Text style={{fontSize: 50}}>{store.getState().count}</Text>
            </View>
        )
    }
}