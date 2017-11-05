import React, {Component} from 'react';
import { StyleSheet, Platform, View, StatusBar } from 'react-native';
import DecksComponent from './components/DecksComponent'
import AddNewDeckComponent from './components/AddNewDeckComponent'
import { purple, white } from './utils/colors'
import {TabNavigator} from 'react-navigation'
import {Constants} from 'expo'

//Status Bar is controlled here
function AppStatusBar({backgroundColor,...props}){
  return (
    <View style={{backgroundColor,height:Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
    )
}


//Tab Bar is controlled using following Tabs constant
const Tabs = TabNavigator({
  Decks :{
    screen:DecksComponent,
     navigationOptions: {
      tabBarLabel: 'Decks',
    },
  }, 
  AddNewDeck:{
    screen:AddNewDeckComponent,
    navigationOptions: {
      tabBarLabel: 'Add New Deck',
    }
  },
  },{
    navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    upperCaseLabel:false,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}
)
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
          <AppStatusBar backgroundColor={purple} barStyle="light-content" />
          <Tabs/>
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
