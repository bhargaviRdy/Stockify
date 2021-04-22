import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../src/containers/Signin'
// import Camera from '../containers/screens/Camera';
import { NavigationContainer } from '@react-navigation/native'

const SCREEN = 1

let Stack = createStackNavigator()

let screens = (function () {
  let screen = [
    <Stack.Screen name={'SignIn'} component={SignIn} />
    // <Stack.Screen name={'Home'} component={Home} />,
  ]

  return screen
})()

const mainScreen = (
  <NavigationContainer initialRouteName="SignIn">
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true
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
