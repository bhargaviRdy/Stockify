import React, { Component } from 'react'
import { Text, View, Platform } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FusionCharts from 'react-native-fusioncharts'

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

const chartData = [
  { label: 'Venezuela', value: '290' },
  { label: 'Saudi', value: '260' },
  { label: 'US', value: '30' },
  { label: 'Russia', value: '115' },
  { label: 'Canada', value: '180' },
  { label: 'Iran', value: '140' },
  { label: 'China', value: '30' },
  { label: 'UAE', value: '100' }
]
// const chartConfig = {
//   type: 'column3d',
//   width: '100%',
//   height: '400',
//   dataFormat: 'json',
//   dataSource: {
//     chart: {
//       caption: 'Countries With Most Oil Reserves [2017-18]',
//       subCaption: 'In MMbbl = One Million barrels',
//       xAxisName: 'Country',
//       yAxisName: 'Reserves (MMbbl)',
//       numberSuffix: 'K',
//       theme: 'fusion'
//     },
//     data: chartData
//   }
// }

const libraryPath = Platform.select({
  android: {
    uri:
      '/Users/ankit/Documents/Others/Stockify/android/app/src/main/assets/fusioncharts.html'
  },
  ios: require('../../assets/fusioncharts.html')
})

let _renderChart = (data) => {
  debugger
  return (
    <FusionCharts
      type={'area2d'}
      width={'100%'}
      height={300}
      dataFormat={'json'}
      dataSource={{
        chart: {
          caption: 'Countries With Most Oil Reserves [2017-18]',
          subCaption: 'In MMbbl = One Million barrels',
          xAxisName: 'Country',
          yAxisName: 'Reserves (MMbbl)',
          numberSuffix: 'K',
          theme: 'fusion'
        },
        data: data
      }}
      libraryPath={libraryPath}
    />
  )
}

let Charts = async (params) => {
  let company,
    url,
    rootParams = params.route.params,
    formattedData

  company = rootParams.name === 'Google' ? Google : Apple

  url =
    (params.route.name === 'Daily' ? dailyAdjustedAPI : monthlyAdjustedAPI) +
    `${company}` +
    '&apikey=' +
    `${apiKey}`

  Processor._fetchData(url).then((data) => {
    formattedData = Processor._formatData(data)
  })

  debugger
  console.log('format')
  console.log(formattedData)
  return _renderChart(formattedData)
}

export class Processor {
  static _fetchData = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (message) {
      return message
    }
  }

  static _formatData = (data) => {
    let actualData = []
    let tempData = Object.values(data)[1]
    let dates = Object.keys(tempData)

    dates.map((item) => {
      actualData.push({
        label: item,
        value: tempData[item]['4. close']
      })
    })

    console.log(actualData)
    return actualData
  }
}

export class Chart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { route } = this.props
    const Drawer = createDrawerNavigator()

    let screens = Object.values(drawerCharts).map((item) => {
      return (
        <Drawer.Screen
          name={item.name}
          initialParams={route.params}
          component={Charts}
        />
      )
    })

    return (
      <Drawer.Navigator initialRouteName="Monthly">{screens}</Drawer.Navigator>
    )
  }
}

export default Chart
