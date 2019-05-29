import React, { Component } from 'react'
import { View, Text, PanResponder, StyleSheet } from 'react-native'

export default class PanResponderDemoComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            dragging: false,
            initialTop: 50,
            initialLeft: 50,
            offsetTop: 0,
            offsetLeft: 0
        }
    }
    
    panResponder = {}

    componentWillMount(){
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this.handleStartShouldSetPanResponder,
            onPanResponderGrant: this.handlePanResponderGrant,
            onPanResponderMove: this.handlePanResponderMove,
            onPanResponderRelease: this.handlePanResponderEnd,
            onPanResponderTerminate: this.handlePanResponderEnd
        })  
    }
    
    render(){
        const style = {
            backgroundColor: this.state.dragging? 'skyblue' : 'steelblue',
            top: this.state.initialTop + this.state.offsetTop,
            left: this.state.initialLeft + this.state.offsetLeft,
        }
        
        return(
            <View style={styles.container}>
                <View 
                    {...this.panResponder.panHandlers}
                    style={[styles.square, style]}>
                    <Text style={styles.text}>Drag Me!</Text>
                </View>
            </View>
        )
    }

  // Should we become active when the user presses down on the square?
  handleStartShouldSetPanResponder = (e, gestureState) => {
    return true
  }

  // We were granted responder status! Let's update the UI
  handlePanResponderGrant = (e, gestureState) => {
    this.setState({dragging: true})
  }

  // Every time the touch/mouse moves
  handlePanResponderMove = (e, gestureState) => {

    // Keep track of how far we've moved in total (dx and dy)
    this.setState({
      offsetTop: gestureState.dy,
      offsetLeft: gestureState.dx,
    })
  }

  // When the touch/mouse is lifted
  handlePanResponderEnd = (e, gestureState) => {
    const {initialTop, initialLeft} = this.state

    // The drag is finished. Set the initialTop and initialLeft so that
    // the new position sticks. Reset offsetTop and offsetLeft for the next drag.
    this.setState({
      dragging: false,
      initialTop: initialTop + gestureState.dy,
      initialLeft: initialLeft + gestureState.dx,
      offsetTop: 0,
      offsetLeft: 0,
    })
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    square: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 12,
    }
})
