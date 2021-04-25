import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import * as LocalAuthentication from 'expo-local-authentication'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { GoogleSignin } from '@react-native-community/google-signin'

GoogleSignin.configure({
  webClientId:
    '480217212993-m254n089m0uskpbcukhb34hjr1pgm0qs.apps.googleusercontent.com',
  offlineAccess: true
})

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = { userGoogleInfo: {}, loaded: false }
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      this.setState({
        userGoogleInfo: userInfo,
        loaded: true
      })
    } catch (error) {
      alert(error.message)
    }
  }

  localAuthenticate = () => {
    LocalAuthentication.hasHardwareAsync().then((hasHardware) => {
      if (hasHardware)
        LocalAuthentication.supportedAuthenticationTypesAsync().then(
          (supportType) => {
            if (supportType.length > 0)
              LocalAuthentication.isEnrolledAsync().then((isEnrolled) => {
                if (isEnrolled) {
                  LocalAuthentication.authenticateAsync({
                    promptMessage:
                      'Enter phone lock pattern, PIN, fingerprint, face ID',
                    disableDeviceFallback: true,
                    cancelLabel: 'Cancel'
                  })
                    .then((authenticate) => {
                      if (authenticate.success)
                        this.props.navigation.navigate('Home')
                    })
                    .catch((error) => {})
                }
              })
          }
        )
    })
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#312161',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Button
          // icon={require('../assets/drawables/google.png')}
          color="#5e537c"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            width: '50%',
            height: 40
          }}
          uppercase={false}
          onPress={this.signIn}
          mode="contained">
          Sign In with Google
        </Button>
        {this.state.loaded && this.localAuthenticate()}
      </View>
    )
  }
}

export default SignIn
