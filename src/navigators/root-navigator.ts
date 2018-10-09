import {createSwitchNavigator} from 'react-navigation'
import {SignedOut} from '../screens/signed-out-screen'
import {Routes} from '../entities'
import {RootTabs} from './tab-navigator'
import {Platform} from 'react-native'
import {RootDrawer} from './drawer-navigator'

/**
 * Selects tabs for ios and drawer for android
 */
const SelectPlatform = Platform.select({
  ios: () => RootTabs,
  android: () => RootDrawer,
})()

export const createRootNavigator = (isSignedIn: boolean = false) =>
  createSwitchNavigator(
    {
      [Routes.SignedIn]: SelectPlatform,
      [Routes.SignedOut]: SignedOut,
    },
    {
      initialRouteName: isSignedIn ? Routes.SignedIn : Routes.SignedOut,
    },
  )
