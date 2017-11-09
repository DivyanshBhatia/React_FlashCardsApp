import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import {addActiveDeckEntry} from '../actions'


class DeckComponent extends Component{
	handleOnPress=() =>
	{
		const key=`${this.props.data.title}`
		this.props.addActiveDeckEntry({
         [key]:{'title':this.props.data.title,
         	'questions':this.props.data.questions}
        })

		this.props.navigation.navigate('ActiveDeck')
	}
render() {
	const {data} = this.props
	return (		
		<ListItem
            key={data.title}
            title={data.title}
            subtitle= {
              <View style={styles.subtitleView}>
                <Text>{data.questions.length} cards</Text>
              </View>
            }
            onPress={this.handleOnPress}/>
        )}
	}

export default connect(null,{addActiveDeckEntry})(DeckComponent)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
});