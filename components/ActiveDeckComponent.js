import React, {Component} from 'react';
import { StyleSheet, Platform, View,Text } from 'react-native';



class ActiveDeckComponent extends Component{
	render(){
		return (
			<View style={styles.container}>
				<Text>{this.props.navigation.state.params.deckData.title}</Text>
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
});