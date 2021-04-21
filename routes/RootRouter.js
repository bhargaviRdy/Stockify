import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../containers/screens/Home';
import Camera from '../containers/screens/Camera';
import {NavigationContainer} from '@react-navigation/native';

const SCREEN = 1;

let Stack = createStackNavigator();

let screens = (function () {
  let screen = [
    <Stack.Screen name={'SignIn'} component={SignIn} />,
    <Stack.Screen name={'Home'} component={Home} />,
  ];

  return screen;
})();

const mainScreen = (
  <NavigationContainer initialRouteName="Home">
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}>
      {screens}
    </Stack.Navigator>
  </NavigationContainer>
);

class RootRouter extends Component {
  render() {
    return mainScreen;
  }
}

export default RootRouter;
