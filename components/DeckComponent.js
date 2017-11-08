import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'

class DeckComponent extends Component{
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
            }/>
        )}
	}

export default DeckComponent

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