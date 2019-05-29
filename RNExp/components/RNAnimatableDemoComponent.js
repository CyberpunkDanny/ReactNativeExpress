import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, Animated } from 'react-native'

import * as Animatable from 'react-native-animatable'

const colors = ['#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F']
const animations = ['fadeIn', 'shake', 'rubberBand', 'zoomOut']

const RenderColorView = (props)=>{
	
	const menu = colors.map((color, i)=>{
		return(
			<Animatable.View 
				key={i} 
				animation={props.animationOption}
				delay={i*100}
				style={[styles.button, {backgroundColor: color}]}
			>
				<Text styles={styles.text}>{i}</Text>
			</Animatable.View>
		)
	})
	
	return menu
}

export default class RNAnimatableDemo extends Component{
	constructor(props){
		super(props)
		this.state={
			animation: animations[0]
		}
	}
	
	startAnimation = ()=>{
		const index = (animations.indexOf(this.state.animation)+1) % animations.length
		this.setState({animation: animations[index]})
	}
	
	/* use key to force a re-render when we switch animations */
	render(){
		return(
			<View style={styles.container}>
				<TouchableOpacity 
					key={this.state.animation} 
					onPress={()=>this.startAnimation()}
				>
					<RenderColorView animationOption={this.state.animation}/>
				</TouchableOpacity>
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
		height: 80,
    	justifyContent: 'center',
    	alignItems: 'center',
  	},
  	text: {
    	color: 'white',
    	fontSize: 20,
  	},
})
