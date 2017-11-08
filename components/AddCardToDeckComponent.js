import React, {Component} from 'react';
import { StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import t from 'tcomb-form-native';
import {red,white} from '../utils/colors';
import {Constants} from 'expo'
import {submitCardToDeck} from '../utils/api'
import {addActiveDeckEntry} from '../actions'
import { connect } from 'react-redux'

const _ = require('lodash');
const Form = t.form.Form;
const Card = t.struct({
  question: t.String,
  answer: t.String,
});
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);
stylesheet.textboxView.normal.marginBottom = 20;
stylesheet.textboxView.normal.height = Constants.statusBarHeight;
stylesheet.textboxView.normal.padding=10
stylesheet.textboxView.normal.marginLeft = 10;

stylesheet.textbox.normal.marginBottom = 20;
stylesheet.textbox.normal.height = Constants.statusBarHeight;
stylesheet.textbox.normal.padding=10
stylesheet.textbox.normal.marginLeft = 10;

const options = {
  fields: {
    question: {
      error: 'Question is mandatory to create a card. You will not be able to submit card without question',
      label: 'Enter Question',
    },
    answer: {
      error: 'Answer is mandatory to create a card. You will not be able to submit card without answer',
      label: 'Enter Answer',
    },
  	name: {
      stylesheet: stylesheet // overriding the style of the textbox
    }
  },
};


class AddCardToDeckComponent extends Component{
	static navigationOptions = ({navigation}) =>{
		return {
			title: 'Add Card Here' 
			}
	}

	state = {
   		question:null, 
  		answer:null,
  	}
	
  	handleChange = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    if(value!==null){
      this.setState({
        question:value.question,
        answer:value.answer,
      })
    }
  }

  	handleSubmit = () => {
  	const key = Object.values(this.props.activeDeck)[0].title; // use that ref to get the form value
    const entry = this.state
    if(entry!==null && entry!==''){
      this.props.addActiveDeckEntry({
         [key]:{'title':key,'questions':[...Object.values(this.props.activeDeck)[0].questions,entry]}
        }
       )
      submitCardToDeck({entry,key});
        this.setState({
        	question:null, 
  			answer:null,
        })
        this.returnToDeck() 
      }
    }

    returnToDeck = () => {
    	this.props.navigation.navigate('ActiveDeck');
  	} 

	render(){
		return(
			<View style={styles.container}>
				<Form ref={card => this._form = card} type={Card} 
          			onChange={this.handleChange}
          			value={{'question':this.state.question,
          					'answer':this.state.answer
          				}}
          			options={options} />
          			<TouchableOpacity
          				style={styles.btn}
          				onPress = { this.handleSubmit }
          				>
          				<Text style={styles.btnText}>Submit Card</Text>
        			</TouchableOpacity>
			</View>
		)
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btn:{
    backgroundColor: red,
    padding:10,
    paddingLeft:50,
    paddingRight:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  btnText:{
    color:white
  }
});

const formStyles = {
  ...Form.stylesheet,
  error: {
      color: red,
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }

function mapStateToProps (state) {
  return {
    activeDeck:state.activeDeck
  }
}

export default connect(mapStateToProps,{addActiveDeckEntry})(AddCardToDeckComponent)  
