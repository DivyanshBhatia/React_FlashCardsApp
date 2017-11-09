import React, {Component} from 'react';
import { StyleSheet, Platform, View, StatusBar } from 'react-native';
import DecksComponent from './components/DecksComponent'
import AddNewDeckComponent from './components/AddNewDeckComponent'
import ActiveDeckComponent from './components/ActiveDeckComponent'
import AddCardToDeckComponent from './components/AddCardToDeckComponent'
import QuizForDeckComponent from './components/QuizForDeckComponent'
import QuizResultsComponent from './components/QuizResultsComponent'

import { purple, white } from './utils/colors'
import {TabNavigator,StackNavigator} from 'react-navigation'
import {Constants} from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import combineReducer from './reducers'

import {setLocalNotification} from './utils/notificationsHelper'


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

const MainNavigator=StackNavigator({
  Home :{
    screen:Tabs
  },
  ActiveDeck:{
   screen:ActiveDeckComponent,
     navigationOptions: {
      tabBarLabel: 'ActiveDeck',
      headerTintColor:Platform.OS === 'ios' ? purple : white,
      headerStyle: {
        backgroundColor:Platform.OS === 'ios' ? white : purple,
      }
    }, 
  },
  AddCardToActiveDeck:{
   screen:AddCardToDeckComponent,
     navigationOptions: {
      tabBarLabel: 'AddCardToActiveDeck',
      headerTintColor:Platform.OS === 'ios' ? purple : white,
      headerStyle: {
        backgroundColor:Platform.OS === 'ios' ? white : purple,
      }
    }, 
  },
  StartQuizForDeck:{
   screen:QuizForDeckComponent,
     navigationOptions: {
      tabBarLabel: 'StartQuizForDeck',
      headerTintColor:Platform.OS === 'ios' ? purple : white,
      headerStyle: {
        backgroundColor:Platform.OS === 'ios' ? white : purple,
      }
    }, 
  },
  QuizResultsForDeck:{
   screen:QuizResultsComponent,
     navigationOptions: {
      tabBarLabel: 'QuizResultsForDeck',
      headerTintColor:Platform.OS === 'ios' ? purple : white,
      headerStyle: {
        backgroundColor:Platform.OS === 'ios' ? white : purple,
      }
    }, 
  },
})
export default class App extends Component {
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    return (
    <Provider store={createStore(combineReducer)}>
      <View style={{flex: 1}}>
          <AppStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator/>
      </View>
    </Provider>
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
