import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import {red,white,blue} from '../utils/colors';
import {Constants} from 'expo'

class QuizResultsComponent extends Component{

	handleRetake=()=>{
		this.props.navigation.navigate('ActiveDeck')
	}

	handleAnotherQuiz=()=>{
		this.props.navigation.navigate('Decks')
	}

	render(){
		return(
		
			<View style={styles.container}>
				<Text>
					Your Score for {this.props.title} quiz is {this.props.score}.
				</Text>
				<Text>
					Percentage of correct questions: {(((this.props.score/this.props.totalQuestions).toFixed(4))*100)} %. 
				</Text>
				<TouchableOpacity
				style={styles.btnRed}
				onPress = {this.handleRetake}>
                <Text style={styles.btnText}>
                	Retake Current Quiz
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
				style={styles.btnBlue}
				onPress = {this.handleAnotherQuiz}>
                <Text style={styles.btnText}>
                	Take Another Quiz
                </Text>
                </TouchableOpacity>
			</View>
	)}

}

export default QuizResultsComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },btnSettings:{
  	flex: 1,
  	marginTop:64,
  	alignItems: 'center',
    justifyContent: 'center',
  },
  btnRed:{
    backgroundColor: red,
    padding:10,
    paddingLeft:50,
    paddingRight:50,
    marginBottom: Constants.statusBarHeight,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  btnBlue:{
    backgroundColor: blue,
    padding:10,
    paddingLeft:50,
    paddingRight:50,
    marginBottom: Constants.statusBarHeight,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  btnText:{
    color:white
  },
  })