import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class InputBox extends Component{
    constructor(props){
        super(props);
        this.state={
            text: ''
        };
    }
    
    onChangeInput = (input)=>{
        this.setState({text: input})
    }
    
    onSubmitInput = ()=>{
        if(this.state.text){
            this.props.onSubmitTask(this.state.text);
            this.setState({text: ''});
        }
        else return;
    }
    
    
    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputText} value={this.state.text} onChangeText={(input)=>this.onChangeInput(input)}  placeholder={this.props.placeholderText}/>
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