import React, { Component } from 'react'
import { Text, View } from 'react-native'
import FusionCharts from 'react-native-fusioncharts'

import { Processor } from '../provider/Processor'

const Apple = 'AAPL'
const Google = 'GOOG'
const apiKey = 'AO4NMBO0IDGCL5JW'
const dailyAdjustedAPI =
  'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol='
const monthlyAdjustedAPI =
  'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol='
const libraryPath = Platform.select({
  android: {
    uri:
      '/Users/ankit/Documents/Others/Stockify/android/app/src/main/assets/fusioncharts.html'
  },
  ios: require('../../assets/fusioncharts.html')
})

export class FusionChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: undefined
    }
  }

  componentDidMount() {
    let company,
      url,
      rootParams = this.props.route.params

    company = rootParams.name === 'Google' ? Google : Apple

    debugger
    url =
      (this.props.route.name === 'Daily'
        ? dailyAdjustedAPI
        : monthlyAdjustedAPI) +
      `${company}` +
      '&apikey=' +
      `${apiKey}`

    Processor._fetchData(url).then((response) => {
      response = Processor._formatData(response)

      this.setState({
        data: response
      })
    })
  }
  render() {
    let { data } = this.state

    return data !== undefined ? (
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
    ) : (
      <View />
    )
  }
}

export default FusionChart
