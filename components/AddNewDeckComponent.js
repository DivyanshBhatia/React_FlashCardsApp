import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


class AddNewDeckComponent extends Component{
	render() {
    return (
      <View style={styles.container}>
        <Text>Add New Deck</Text>
      </View>
    );
  }
}

export default AddNewDeckComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});