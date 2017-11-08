import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux'
import {fetchAllDecks} from '../utils/api'
import {receiveEntries} from '../actions'
import DeckComponent from './DeckComponent'


class DecksComponent extends Component{

  componentWillMount(){
    fetchAllDecks()
    .then((entries) => this.props.receiveEntries(entries))
  }
	render() {
    const {decks} = this.props
    return (
      <View style={styles.container}>
        <FlatList
        //Filtering the data here to remove any null or empty values
          data={[...Object.values(decks)].filter(
            function(item){
              return item.title!=null && item.title.length > 0 
            })}
          renderItem={({ item }) => (
            <DeckComponent data={item} navigation={this.props.navigation}/>
          )}
          keyExtractor={item => item.title}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

function mapStateToProps (state) {
  return {
    decks:state.decks
  }
}

export default connect(mapStateToProps,{receiveEntries})(DecksComponent)
