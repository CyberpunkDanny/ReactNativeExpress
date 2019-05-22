import React, {Component} from 'react';
import { View, Text, SectionList, StyleSheet, Platform } from 'react-native';

const nominees = [
    {
        id: 0,
        title: 'Best Movies',
        data: [
            {id: 0, value: 'Avatar'},
            {id: 1, value: 'Predestination'},
            {id: 2, value: 'Titanic'},
            {id: 3, value: 'Batman'}   
        ]
    },
    {
        id: 1,
        title: 'Best TV Series',
        data: [
            {id: 4, value: 'Game of Thrones'},
            {id: 5, value: '13 Reasons Why'},
            {id: 6, value: 'Breaking Bad'},
            {id: 7, value: 'House of Cards'}
        ]
    }
]

const nomineesActors = [
    {
        id: 0,
        title: 'Best Movies',
        data: [
            {id: 0, value: 'Avatar'},
            {id: 1, value: 'Predestination'},
            {id: 2, value: 'Titanic'},
            {id: 3, value: 'Batman'}   
        ],
        renderItem: ({item})=>{
            return(
                <Text style={styles.elementOne}>{item.value}</Text>
            )
        } 
    },
    {
        id: 1,
        title: 'Best TV Series',
        data: [
            {id: 4, value: 'Game of Thrones'},
            {id: 5, value: '13 Reasons Why'},
            {id: 6, value: 'Breaking Bad'},
            {id: 7, value: 'House of Cards'}
        ],
        renderItem: ({item})=>{
            return(
                <Text style={styles.elementTwo}>{item.value}</Text>
            )
        } 
    }
]

/* Use Alternately the following SectionLists (Homo & Hetero)*/

export default class SectionListDemo extends Component{
    
    extractKey = ({id})=>{
        return id.toString();
    }

    renderHeader = ({section})=>{
        return(
            <Text style={styles.header}>{section.title}</Text>
        );
    }
    
    render(){
        return(
            <View style={{flex:1, paddingTop: Platform.OS === 'ios'? 0 : Expo.Constants.statusBarHeight}}>
                {/* <SectionList 
                    style={styles.container}
                    sections={nominees}
                    renderSectionHeader={(section)=>this.renderHeader(section)}
                    renderItem={(item)=>this.renderElement(item)}
                    keyExractor={(id)=>this.extractKey(id)}
                /> */}
                
                <SectionList 
                    style={styles.container}
                    sections={nomineesActors}
                    renderSectionHeader={(section)=>this.renderHeader(section)}
                    keyExractor={(id)=>this.extractKey(id)}
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
    header: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'steelblue',
        fontWeight: 'bold',
        color: 'white'
    },
    element: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'skyblue'
    },
    elementOne: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'magenta'
    },
    elementTwo: {
        padding: 15,
        marginBottom: 5,
        backgroundColor: 'cyan'
    }
})