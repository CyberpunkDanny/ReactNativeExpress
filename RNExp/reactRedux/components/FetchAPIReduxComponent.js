import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Platform, ActivityIndicator, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { fetchPosts, clearPosts } from './configureStoreFetchAPI'

const mapStateToProps = (state)=>{
	return {
		isLoading: state.isLoading,
		isError: state.isError,
		posts: state.posts
	}
}

const RenderPosts = (props)=>{
    const posts = props.posts
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

class FetchAPIRedux extends Component{
    constructor(props){
        super(props)
    }
    
    componentWillMount = async ()=> {
        this.props.dispatch(fetchPosts())
    }
    
	refresh = async ()=>{
		this.props.dispatch(clearPosts())
		this.props.dispatch(fetchPosts())
	}
	
    render(){
        if(this.props.isLoading){
            return(
                <View style={styles.center}>
                    <ActivityIndicator animating={true} />
                </View>
            )
        }
        else if(this.props.isError){
            return(
                <View style={styles.center}>
                    <Text>Failed to load posts!</Text>
                </View>
            )
        }
        else return(
			<View style={styles.container}>
				<ScrollView style={styles.container}>
					<RenderPosts posts={this.props.posts} />
				</ScrollView>
				<TouchableOpacity style={styles.button} onPress={()=>this.refresh()}>
					<Text>Refresh</Text>
				</TouchableOpacity>
			</View>
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

export default connect(mapStateToProps)(FetchAPIRedux)