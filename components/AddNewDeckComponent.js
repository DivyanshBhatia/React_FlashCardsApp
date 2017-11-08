import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import t from 'tcomb-form-native';
import {red,white} from '../utils/colors'
import {connect} from 'react-redux'
import {addDeckEntry} from '../actions'
import {submitDeck} from '../utils/api'
import {NavigationActions} from 'react-navigation'

const Form = t.form.Form;
const Deck = t.struct({
  title: t.String,
});

const options = {
  fields: {
    title: {
      error: 'Title is mandatory to create a deck. Please enter a title and try again.',
      label: 'Give a title for your new deck',
    },
  },
  stylesheet: formStyles,
};

class AddNewDeckComponent extends Component{
  
  state = {
   title:null,
   questions:[] 
  }

  handleSubmit = () => {
    const key = this.state.title; // use that ref to get the form value
    const entry = this.state
    if(entry!==null && entry!==''){
      this.props.addDeckEntry({
          [key]:entry
         }
        )
        submitDeck({entry,key})
        this.setState({
        title:null
        })
        this.returnToMain()
        
      }
    }
  

  handleChange = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    if(value!==null){
      this.setState({
        title:value.title
      })
    }
  }

  returnToMain = () => {
    this.props.navigation.navigate('Decks');
  }  

	render() {
    
    return (
      <View style={styles.container}>
        <Form ref={deck => this._form = deck} type={Deck} 
          onChange={this.handleChange}
          value={{'title':this.state.title}}
          options={options} />
        <TouchableOpacity
          style={styles.btn}
          onPress={this.handleSubmit}>
          <Text style={styles.btnText}>Submit Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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

export default connect(null,{addDeckEntry})(AddNewDeckComponent)
