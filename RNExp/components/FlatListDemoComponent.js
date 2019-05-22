import React, {Component} from 'react';
import { View, FlatList, Text, StyleSheet, Platform } from 'react-native';

const films = [
    {key: '0', value: 'Avatar'},
    {key: '1', value: 'Predestination'},
    {key: '2', value: 'Titanic'},
    {key: '3', value: 'Batman'}        
]

const series = [
    {id: 0, value: 'Game of Thrones'},
    {id: 1, value: '13 Reasons Why'},
    {id: 2, value: 'Breaking Bad'},
    {id: 3, value: 'House of Cards'}        
]

/* Observe FlatLists, one with keyExtractor and one with default key */

export default class FlatListDemo extends Component{
    

    renderElement = ({item})=>{
        return(
            <Text style={styles.row}>
                {item.value}
            </Text>
        )
    }

    extractKey = ({id})=>{
        return id.toString();
    }
    
    render(){
        return(
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios'? 0 : Expo.Constants.statusBarHeight }}>
                <FlatList 
                    style={styles.container}
                    data={films} 
                    renderItem={(item)=>this.renderElement(item)} 
                />
                <FlatList 
                    style={styles.container}
                    data={series}
                    renderItem={(item)=>this.renderElement(item)}
                    keyExtractor={(id)=>this.extractKey(id)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 15
    },
    row: {
        padding: 15,
        backgroundColor: 'skyblue',
        marginBottom: 5
    }
})