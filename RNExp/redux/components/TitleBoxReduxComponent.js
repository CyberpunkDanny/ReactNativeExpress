import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TitleBox = (props)=>{
  return(
    <View style={styles.header}>
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    padding: 15
  },
  titleText: {
    color: 'white',
    textAlign: 'center'
  }
})

export default TitleBox;