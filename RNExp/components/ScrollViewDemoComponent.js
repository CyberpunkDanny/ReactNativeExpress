import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Platform, Dimensions } from 'react-native';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default class ScrollViewDemo extends Component{
    render(){
        return(
            <ScrollView styles={styles.container}>
                <View style={styles.largeBox}></View>
                
                <ScrollView horizontal>
                    <View style={styles.smallBox}></View>
                    <View style={styles.smallBox}></View>
                    <View style={styles.smallBox}></View>
                    <View style={styles.smallBox}></View>
                </ScrollView>
                
                <View style={styles.largeBox}></View>
              
                <View style={styles.largeBox}></View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    largeBox: {
        width: deviceWidth,
        height: deviceHeight/2,
        backgroundColor: 'skyblue',
        marginBottom: 5
    },
    smallBox: {
        width: deviceWidth/1.5,
        height: deviceHeight/2.5,
        backgroundColor: 'steelblue',
        marginRight: 5,
        marginBottom: 5
    }
})