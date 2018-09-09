import {createSwitchNavigator} from 'react-navigation'
import {SignedInNavigator} from '../screens/signed-in-screen'
import {SignedOut} from '../screens/signed-out-screen'
import {Routes} from '../entities'

export const createRootNavigator = (isSignedIn: boolean = false) =>
  createSwitchNavigator(
    {
      [Routes.SignedIn]: SignedInNavigator,
      [Routes.SignedOut]: SignedOut,
    },
    {
      initialRouteName: isSignedIn ? Routes.SignedIn : Routes.SignedOut,
    },
  )
