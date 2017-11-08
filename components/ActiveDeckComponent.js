import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import {red,white} from '../utils/colors';
import {Constants} from 'expo'
import AddCardToDeckComponent from './AddCardToDeckComponent'
import { connect } from 'react-redux'
import {addActiveDeckEntry} from '../actions'

class ActiveDeckComponent extends Component{
	static navigationOptions = ({navigation}) =>{
		return {
			title: "Deck Cards" 
			}
	}

	render(){
    const hasNoCards= typeof this.props.activeDeck=== undefined || 
                      Object.values(this.props.activeDeck).length === 0 ||
                      Object.values(this.props.activeDeck)[0].questions.length === 0
          
		return (
			<View style={styles.container}>
			<Text>
			{
					Object.values(this.props.activeDeck)[0].title
			}	 
			</Text>
			<Text>	
				{
					hasNoCards ? 0 : Object.values(this.props.activeDeck)[0].questions.length
				} cards</Text>
			
			<View style={styles.btnSettings}>	
				<TouchableOpacity
          			style={styles.btn}
          			onPress = {() => 
          				this.props.navigation.navigate(
            			'AddCardToActiveDeck'
            			)}>
          			<Text style={styles.btnText}
          			>Add Cards</Text>
        		</TouchableOpacity>
				{ !hasNoCards &&
        <TouchableOpacity
                onPress = {() => 
                  this.props.navigation.navigate(
                  'StartQuizForDeck'
                  )}
          			style={styles.btn}>
          			<Text style={styles.btnText}>Start Quiz</Text>
        		</TouchableOpacity>
        }		
        <TouchableOpacity
        			onPress = {() => 
          				this.props.navigation.navigate(
            			'Decks'
            			)}
          			style={styles.btn}>
          			<Text style={styles.btnText}>Return to Decks List</Text>
        		</TouchableOpacity>
            </View>
			</View>
		)
	}
}

function mapStateToProps (state) {
  return {
    activeDeck:state.activeDeck
  }
}

export default connect(mapStateToProps,{addActiveDeckEntry})(ActiveDeckComponent)

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