import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class QuizForDeckComponent extends Component{
	
	static navigationOptions = ({navigation}) =>{
		return {
			title: "Quiz in Progress" 
			}
	}

	render(){
		return(
		<View style={styles.container}>
			<Text>
				QuizForDeckComponent	 
			</Text>
		</View>
	)}
}

function mapStateToProps (state) {
  return {
    activeDeck:state.activeDeck
  }
}

export default connect(mapStateToProps)(QuizForDeckComponent)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  })