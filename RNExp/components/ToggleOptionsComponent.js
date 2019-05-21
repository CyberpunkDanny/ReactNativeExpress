import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RenderOption = (props)=>{
    return(
      <TouchableOpacity 
        style={[styles.option, props.option === props.value && styles.activeOption]}
        onPress = {()=>props.onPress(props.option)}
        key={props.index}  
      >
        <Text>{props.option}</Text>
      </TouchableOpacity>
    );
}

export default class ToggleOptions extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    
    const items = this.props.options.map((option, index)=>{
      return(
        <RenderOption 
          option={option} 
          value={this.props.value}
          onPress={this.props.onChange}
          key={index}    
        />
      );
    })
    return(
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.label}</Text>
        <View style={styles.optionsContainer}>
          {items}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20
  },
  label: {
    padding: 5
  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  option: {
    padding: 10,
    backgroundColor: 'whitesmoke'
  },
  activeOption: {
    backgroundColor: 'skyblue'
  }
})