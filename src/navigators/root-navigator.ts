import {SwitchNavigator} from 'react-navigation'
import {SignedInNavigator} from '../screens/signed-in-screen'
import {SignedOut} from '../screens/signed-out-screen'

export const createRootNavigator = (isSignedIn = false) =>
  SwitchNavigator({
    SignedIn: {
      screen: SignedInNavigator
    },
    SignedOut: {
      screen: SignedOut
    },
  }, {
    initialRouteName: isSignedIn ? 'SignedIn' : 'SignedOut'
  })