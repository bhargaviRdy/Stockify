import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../src/containers/Signin'
import Home from '../src/containers/Home'
import Chart from '../src/containers/Chart'
import { NavigationContainer } from '@react-navigation/native'

const SCREEN = 1

let Stack = createStackNavigator()

let screens = (function () {
  let screen = [
    <Stack.Screen
      name={'SignIn'}
      component={SignIn}
      options={{
        header: () => null
        // title: ''
        // headerStyle: { backgroundColor: '#312161' }
      }}
    />,
    <Stack.Screen
      name={'Home'}
      component={Home}
      options={{
        headerLeft: () => null
        // headerRight: () => this.props.navigation.pop()
      }}
    />,
    <Stack.Screen name={'Chart'} component={Chart} />
  ]

  return screen
})()

const mainScreen = (
  <NavigationContainer initialRouteName="Home">
    <Stack.Navigator
      // mode="modal"
      screenOptions={{
        gestureEnabled: false
      }}>
      {screens}
    </Stack.Navigator>
  </NavigationContainer>
)

class RootRouter extends Component {
  render() {
    return mainScreen
  }
}

export default RootRouter
