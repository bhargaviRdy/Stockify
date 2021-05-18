import React, { Component } from 'react'
import { Text, View, Platform } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Fusionchart, { FusionChart } from './FusionChart'

const Apple = 'AAPL'
const Google = 'GOOG'
const apiKey = 'AO4NMBO0IDGCL5JW'
const dailyAdjustedAPI =
  'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol='
const monthlyAdjustedAPI =
  'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol='

let drawerCharts = {
  daily: {
    name: 'Daily'
  },
  monthly: {
    name: 'Monthly'
  }
}

function _renderChart(route) {
  return <FusionChart route={route} />
}

export class Chart extends Component {
  render() {
    const Drawer = createDrawerNavigator()

    let screens = Object.values(drawerCharts).map((item) => {
      debugger
      return (
        <Drawer.Screen
          name={item.name}
          initialParams={item.name}
          component={({ navigation, route }) => _renderChart(route)}
        />
      )
    })

    return (
      <Drawer.Navigator initialRouteName="Monthly">{screens}</Drawer.Navigator>
    )
  }
}

export default Chart
