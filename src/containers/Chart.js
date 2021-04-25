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
const checkData = [
  { label: '2021-04-23', value: '2315.3000' },
  { label: '2021-03-31', value: '2068.6300' },
  { label: '2021-02-26', value: '2036.8600' },
  { label: '2021-01-29', value: '1835.7400' },
  { label: '2020-12-31', value: '1751.8800' },
  { label: '2020-11-30', value: '1760.7400' },
  { label: '2020-10-30', value: '1621.0100' },
  { label: '2020-09-30', value: '1469.6000' },
  { label: '2020-08-31', value: '1634.1800' },
  { label: '2020-07-31', value: '1482.9600' },
  { label: '2020-06-30', value: '1413.6100' },
  { label: '2020-05-29', value: '1428.9200' },
  { label: '2020-04-30', value: '1348.6600' },
  { label: '2020-03-31', value: '1162.8100' },
  { label: '2020-02-28', value: '1339.3300' },
  { label: '2020-01-31', value: '1434.2300' },
  { label: '2019-12-31', value: '1337.0200' },
  { label: '2019-11-29', value: '1304.9600' },
  { label: '2019-10-31', value: '1260.1100' },
  { label: '2019-09-30', value: '1219.0000' },
  { label: '2019-08-30', value: '1188.1000' },
  { label: '2019-07-31', value: '1216.6800' },
  { label: '2019-06-28', value: '1080.9100' },
  { label: '2019-05-31', value: '1103.6300' },
  { label: '2019-04-30', value: '1188.4800' },
  { label: '2019-03-29', value: '1173.3100' },
  { label: '2019-02-28', value: '1119.9200' },
  { label: '2019-01-31', value: '1116.3700' },
  { label: '2018-12-31', value: '1035.6100' },
  { label: '2018-11-30', value: '1094.4300' },
  { label: '2018-10-31', value: '1076.7700' }
]
// 31: {label: "2018-09-28", value: "1193.4,700"}
// 32: {label: "2018-08-31", value: "1218.1900"}
// 33: {label: "2018-07-31", value: "1217.2600"}
// 34: {label: "2018-06-29", value: "1115.6500"}
// 35: {label: "2018-05-31", value: "1084.9900"}
// 36: {label: "2018-04-30", value: "1017.3300"}
// 37: {label: "2018-03-29", value: "1031.7900"}
// 38: {label: "2018-02-28", value: "1104.7300"}
// 39: {label: "2018-01-31", value: "1169.9400"}
// 40: {label: "2017-12-29", value: "1046.4000"}
// 41: {label: "2017-11-30", value: "1021.4100"}
// 42: {label: "2017-10-31", value: "1016.6400"}
// 43: {label: "2017-09-29", value: "959.1100"}
// 44: {label: "2017-08-31", value: "939.3300"}
// 45: {label: "2017-07-31", value: "930.5000"}
// 46: {label: "2017-06-30", value: "908.7300"}
// 47: {label: "2017-05-31", value: "964.8600"}
// 48: {label: "2017-04-28", value: "905.9600"}
// 49: {label: "2017-03-31", value: "829.5600"}
// 50: {label: "2017-02-28", value: "823.2100"}
// 51: {label: "2017-01-31", value: "796.7900"}
// 52: {label: "2016-12-30", value: "771.8200"}
// 53: {label: "2016-11-30", value: "758.0400"}
// 54: {label: "2016-10-31", value: "784.5400"}
// 55: {label: "2016-09-30", value: "777.2900"}
// 56: {label: "2016-08-31", value: "767.0500"}
// 57: {label: "2016-07-29", value: "768.7900"}
// 58: {label: "2016-06-30", value: "692.1000"}
// 59: {label: "2016-05-31", value: "735.7200"}
// 60: {label: "2016-04-29", value: "693.0100"}
// 61: {label: "2016-03-31", value: "744.9500"}
// 62: {label: "2016-02-29", value: "697.7700"}
// 63: {label: "2016-01-29", value: "742.9500"}
// 64: {label: "2015-12-31", value: "758.8800"}
// 65: {label: "2015-11-30", value: "742.6000"}
// 66: {label: "2015-10-30", value: "710.8100"}
// 67: {label: "2015-09-30", value: "608.4200"}
// 68: {label: "2015-08-31", value: "618.2500"}
// 69: {label: "2015-07-31", value: "625.6100"}
// 70: {label: "2015-06-30", value: "520.5100"}
// 71: {label: "2015-05-29", value: "532.1100"}
// 72: {label: "2015-04-30", value: "537.3400"}
// 73: {label: "2015-03-31", value: "548.0000"}
// 74: {label: "2015-02-27", value: "558.4000"}
// 75: {label: "2015-01-30", value: "534.5200"}
// 76: {label: "2014-12-31", value: "526.4000"}
// 77: {label: "2014-11-28", value: "541.8300"}
// 78: {label: "2014-10-31", value: "559.0800"}
// 79: {label: "2014-09-30", value: "577.3600"}
// 80: {label: "2014-08-29", value: "571.6000"}
// 81: {label: "2014-07-31", value: "571.6000"}
// 82: {label: "2014-06-30", value: "575.2800"}
// 83: {label: "2014-05-30", value: "559.8900"}
// 84: {label: "2014-04-30", value: "526.6600"}]

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
          xAxisName: 'Dates',
          yAxisName: 'Reserves (MMbbl)',
          theme: 'fusion',
          plotToolText: 'AAPL Stock Price: $dataValue'
        },
        data: data
      }}
      libraryPath={libraryPath}
    />
  )
}

let Charts = (params) => {
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
    // return _renderChart(data)
    console.log(data)
    // formattedData = _renderChart(Processor._formatData(data))
  })

  return _renderChart(checkData)
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
