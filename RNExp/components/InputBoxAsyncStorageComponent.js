import React, { Component } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class InputBoxAsyncStorage extends Component{
	constructor(props){
        super(props);
        this.state={
            input: ''
        };
    }
	
	onChangeInputName = (char)=>{
		this.setState({input: char})
	}
	
	onSubmitInput = ()=>{
		if(this.state.input){
            this.props.onSubmitName(this.state.input);
            this.setState({input: ''});
        }
        else return;
	}
	
	render(){
		return(
			<View style={styles.container}>
				<TextInput 
					style={styles.inputText}
					value={this.state.input} 
					onChangeText={(char)=>this.onChangeInputName(char)} 
					placeholder={this.props.placeholderText} 
				/>
				<TouchableOpacity style={styles.onSubmitButton} onPress={()=>this.onSubmitInput()}> 
                    <Icon name="check-circle" size={40} color='skyblue' />
                </TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'skyblue'
    },
    inputText: {
        padding: 15,
        flex: 0.85
    },
    onSubmitButton: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    }
})