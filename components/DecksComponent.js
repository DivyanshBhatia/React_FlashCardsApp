import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux'
import {fetchAllDecks} from '../utils/api'
import {receiveEntries} from '../actions'


class DecksComponent extends Component{

  static navigationOptions = {
    title: 'DecksComponent',
    tabBarLabel: 'Decks'
  }

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
              <Text>{item.title}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps (state) {
  return {
    decks:state.decks
  }
}

export default connect(mapStateToProps,{receiveEntries})(DecksComponent)
