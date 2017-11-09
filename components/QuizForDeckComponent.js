import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {red,white,blue} from '../utils/colors';
import {Constants} from 'expo'
import TextButton from './TextButton'
import QuizResultsComponent from './QuizResultsComponent'

class QuizForDeckComponent extends Component{
	
	static navigationOptions = ({navigation}) =>{
		return {
			title: "Quiz in Progress" 
			}
	}

	state = {
   		activeQuestionIndex:0,
   		isQuestionDisplayed:true,
   		isAnswerDisplayed:false,
   		score:0
  	}

  	handleSubmit=()=>{
  		this.setState({
     		 activeQuestionIndex: this.state.activeQuestionIndex + 1,
     		 isQuestionDisplayed:true,
   			 isAnswerDisplayed:false,
    		});
  		}

  	handleCorrect=()=>{
  		this.setState({
     		 score: this.state.score + 1,
    		});
  		this.handleSubmit()
  	}

  	handleIncorrect=()=>{
  		this.handleSubmit()
  	}

  	displayAnswer = () =>{
  		this.setState({
     		 isQuestionDisplayed:false,
   			 isAnswerDisplayed:true,
    		});
  		}

  	displayQuestion = () =>{
  		this.setState({
     		 isQuestionDisplayed:true,
   			 isAnswerDisplayed:false,
    		});
  		}


	render(){
		return(
		
			<View style={styles.container}>
			<Text>
				Number of cards left: {Object.values(this.props.activeDeck)[0].questions.length-this.state.activeQuestionIndex}
			</Text>

			{ this.state.isQuestionDisplayed &&
			(
			Object.values(this.props.activeDeck)[0].questions.length > this.state.activeQuestionIndex)  &&
			<View>
				<Text style={{textAlign: 'center', marginTop:50}}>
					{Object.values(this.props.activeDeck)[0].questions[this.state.activeQuestionIndex].question}	 
				</Text>
				<TextButton style={{margin: 20}} onPress={this.displayAnswer}>
          			Show Answer
        		</TextButton>
        	</View>
			}
			{ this.state.isAnswerDisplayed &&
			(
			Object.values(this.props.activeDeck)[0].questions.length > this.state.activeQuestionIndex)  &&
			<View>
				<Text style={{textAlign: 'center', marginTop:50}}>
					{Object.values(this.props.activeDeck)[0].questions[this.state.activeQuestionIndex].answer}	 
				</Text>
				<TextButton style={{margin: 20}} onPress={this.displayQuestion}>
          			Show Question
        		</TextButton>
        	</View>
			}
			{
			(
			Object.values(this.props.activeDeck)[0].questions.length > this.state.activeQuestionIndex)  &&
			<View>
			<TouchableOpacity
				style={styles.btnCorrect}
				onPress = {this.handleCorrect}>
                <Text style={styles.btnText}>
                	Correct
                </Text>
                </TouchableOpacity>

                <TouchableOpacity
				style={styles.btnInCorrect}
				onPress = {this.handleIncorrect}>
                <Text style={styles.btnText}>
                	Incorrect
                </Text>
                </TouchableOpacity>
            </View>
        	}
        	{
			(Object.values(this.props.activeDeck)[0].questions.length === this.state.activeQuestionIndex)  &&
				<QuizResultsComponent score={this.state.score}
				navigation={this.props.navigation}
				totalQuestions={Object.values(this.props.activeDeck)[0].questions.length}
				title={Object.values(this.props.activeDeck)[0].title}/>
			}
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
  	flex:1,
    backgroundColor: '#fff',
  },

  btnSettings:{
  	flex: 1,
  	marginTop:64,
  	alignItems: 'center',
    justifyContent: 'center',
  },
  btnCorrect:{
    backgroundColor: red,
    padding:10,
    paddingLeft:50,
    paddingRight:50,
    marginBottom: Constants.statusBarHeight,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  btnInCorrect:{
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