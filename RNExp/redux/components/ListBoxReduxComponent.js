import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ListBox extends Component{
    constructor(props){
        super(props);
    }
    
    onDelTask = (key)=>{
        this.props.onDelTaskProp(key)
    }
    
    renderTask = ({item})=>{
        return(
            <View style={styles.row}>
                <Text style={styles.text}>
                    {item.value}
                </Text>
                <TouchableOpacity style={styles.onDelButton} onPress={()=>this.onDelTask(item.key)}> 
                    <Icon name="trash" size={30}/>
                </TouchableOpacity>
            </View>    
        )
    }
    
    render(){
        const objectTasks = [];
        
		this.props.tasks.toDoList.map((item, index)=>{
            objectTasks.push({key: index.toString(), value: item})
        })
        
		return(
            <View>
                <FlatList 
                    style={styles.container}
                    data={objectTasks} 
                    renderItem={(item)=>this.renderTask(item)} 
                />
                
            </View>
        )    
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        backgroundColor: '#e8e8e8',
        padding: 10,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#939393',
        marginVertical: 8,
        marginHorizontal: 5
    },
    text: {
        flex: 0.90,
        color: 'black',
        fontSize: 20,
        padding: 15 
    },
    onDelButton: {
        flex: 0.10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15 
    }
})