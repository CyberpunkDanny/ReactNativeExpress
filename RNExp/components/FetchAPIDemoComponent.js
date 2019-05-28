import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Platform, ActivityIndicator } from 'react-native'

const RenderPosts = (props)=>{
    const posts = props.posts
    console.log("POSTS are: ", posts)
    const postsList = posts.map((item, i)=>{
        console.log("I is: ", i, " POST is: ", item)
        return(
            <View style={styles.post} key={item.id}>
                <View style={styles.postNumber}>
                    <Text>{i+1}</Text>
                </View>
                <View style={styles.postContent}>
                    <Text>{item.title}</Text>
                    <Text style={styles.postBody}>{item.body}</Text>
                </View>
            </View>
        )
    })
    return(
        postsList
    )
}

export default class FetchAPIDemo extends Component{
    constructor(props){
        super(props)
        this.state= {
            isLoading: true,
            error: false,
            posts: []
        }
    }
    
    componentWillMount = async ()=> {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()
        this.setState({isLoading: false, error:false, posts})
    }
    
    render(){
        if(this.state.isLoading){
            return(
                <View style={styles.center}>
                    <ActivityIndicator animating={true} />
                </View>
            )
        }
        else if(this.state.error){
            return(
                <View style={styles.center}>
                    <Text>Failed to load posts!</Text>
                </View>
            )
        }
        else return(
            <ScrollView style={styles.container}>
                <RenderPosts posts={this.state.posts} />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios'? 0:Expo.Constants.statusBarHeight  
  },
  post: {
    flexDirection: 'row',
  },
  postNumber: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingVertical: 25,
    paddingRight: 15,
  },
  postBody: {
    marginTop: 10,
    fontSize: 12,
    color: 'lightgray',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 15,
    backgroundColor: 'skyblue',
  },
})
