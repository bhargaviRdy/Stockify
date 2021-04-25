import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  _renderOptions = () => {
    return (
      <View style={{ flex: 1 }}>
        <Button
          onPress={() =>
            this.props.navigation.navigate('Chart', { name: 'Apple' })
          }>
          Apple Inc.
        </Button>
        <Button
          onPress={() =>
            this.props.navigation.navigate('Chart', { name: 'Google' })
          }>
          Google
        </Button>
      </View>
    )
  }

  render() {
    return this._renderOptions()
  }
}

export default Home
