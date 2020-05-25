import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Explore from './screens/Explore'
import Matches from './screens/Matches'
import Chat from './screens/Chat'
import Profile from './screens/Profile'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Tabs = createBottomTabNavigator()

const BottomTabs = () => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        if (route.name == 'Explore') {
          return <MaterialIcons name='search' size={25} color='black' />;
        } else if (route.name == 'Matches') {
          return <AntDesign name='heart' size={25} color='red' />;
        } else if (route.name == 'Chat') {
          return <AntDesign name='wechat' size={25} color='skyblue' />;
        } else if (route.name == 'Profile') {
          return <MaterialIcons name='account-circle' size={25} color='orange' />;
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    }}
  >
    <Tabs.Screen name='Explore' component={Explore} />
    <Tabs.Screen name='Matches' component={Matches} />
    <Tabs.Screen name='Chat' component={Chat} />
    <Tabs.Screen name='Profile' component={Profile} />
  </Tabs.Navigator>
)

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    )
  }
}