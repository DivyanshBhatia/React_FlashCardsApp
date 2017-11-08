import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import {red,white} from '../utils/colors';
import {Constants} from 'expo'


class ActiveDeckComponent extends Component{
	static navigationOptions = ({navigation}) =>{
		return {
			title: `${navigation.state.params.deckData.title} Deck` 
			}
	}
	render(){
		return (
			<View style={styles.container}>
				<Text>{this.props.navigation.state.params.deckData.title}</Text>
				<Text>{this.props.navigation.state.params.deckData.questions.length} cards</Text>
			<View style={styles.btnSettings}>	
				<TouchableOpacity
          			style={styles.btn}>
          			<Text style={styles.btnText}>Add Cards</Text>
        		</TouchableOpacity>
				<TouchableOpacity
          			style={styles.btn}>
          			<Text style={styles.btnText}>Start Quiz</Text>
        		</TouchableOpacity>
            </View>
			</View>
		)
	}
}

export default ActiveDeckComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSettings:{
  	marginTop:64,
  },
  btn:{
    backgroundColor: red,
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
});