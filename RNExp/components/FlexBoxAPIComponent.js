import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import ToggleOptions from './ToggleOptionsComponent';

export default class FlexBoxAPI extends Component{
    constructor(props){
        super(props);
        this.state = {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
    
    render(){
        const primaryAxis = this.state.flexDirection === 'row'? 'Horizontal': 'Vertical';
        const secondaryAxis = this.state.flexDirection === 'row'? 'Vertical': 'Horizontal';      
         
        const layoutStyle = [{
                              flexDirection: this.state.flexDirection,
                              justifyContent: this.state.justifyContent,
                              alignItems: this.state.alignItems
                            }]
      
        return(
            <View style={{flex:1, paddingTop: Platform.OS === 'ios'? 0 : Expo.Constants.statusBarHeight}}>
                <View style={styles.layoutOne}>
                    <ToggleOptions 
                        label={'Primary Axis (flexDirection)'}
                        options={['row', 'column']} 
                        value={this.state.flexDirection}
                        onChange={(option)=>this.setState({flexDirection: option})}
                    />
                    <ToggleOptions 
                        label={primaryAxis + ' distribution (justifyContent)'}
                        options={['flex-start', 'center', 'flex-end', 'space-around', 'space-between']}
                        value={this.state.justifyContent}
                        onChange={(option)=>this.setState({justifyContent: option})}
                    />
                    <ToggleOptions 
                        label={secondaryAxis + ' distribution (alignItems)'}
                        options={['flex-start', 'center', 'flex-end', 'stretch']}
                        value={this.state.alignItems}
                        onChange={(option)=>this.setState({alignItems: option})}
                    />
                </View>
                  <View style={[styles.layoutTwo, layoutStyle]}>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                  </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layoutOne: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.05)',
      padding: 10
    },
    layoutTwo: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.10)'
    },
    box: {
      padding: 25,
      backgroundColor: 'steelblue',
      margin: 5
    }
})