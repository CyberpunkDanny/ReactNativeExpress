import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, Animated } from 'react-native'

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

export default class AnimatedDemo extends Component{
	constructor(props){
		super(props)
		this.state={
			height: new Animated.Value(100)
		}
	}
	
	startAnimation = ()=>{
		this.state.height.setValue(100)
		Animated.spring(this.state.height, {toValue: 300, friction: 0.8}).start()
	}
	
	componentDidMount() {
    	this.startAnimation()
  	}

	
	render(){

		return(
			<View style={styles.container}>
				<AnimatedTouchableOpacity 
					style={[styles.button, {height: this.state.height}]}
					onPress={()=>this.startAnimation()}>
					<Text style={styles.text}>Tap Me!</Text>
				</AnimatedTouchableOpacity>
			</View>	
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    	paddingTop: Platform.OS === 'ios'? 0:Expo.Constants.statusBarHeight 	
	},
  	button: {
		backgroundColor: 'steelblue',
    	justifyContent: 'center',
    	alignItems: 'center',
  	},
	text: {
    	color: 'white',
    	fontSize: 42,
  	},
})