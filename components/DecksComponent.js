import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


class DecksComponent extends Component{
	render() {
    return (
      <View style={styles.container}>
        <Text>Decks</Text>
      </View>
    );
  }
}

export default DecksComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});