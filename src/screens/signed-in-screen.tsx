import {
  Platform,
} from 'react-native'
import {StackNavigator} from 'react-navigation'
import {headerStyle, headerTitleStyle} from '../components/ui/layout'
import {menuLeft} from '../components/ui/menu-left'

/**
 * Selects tabs for ios and drawer for android
 */
const SignedIn = Platform.select({
  ios: () => require('../navigators/tab-navigator').RootTabs,
  android: () => require('../navigators/drawer-navigator').RootDrawer,
})()

export const SignedInNavigator = StackNavigator({
  SignedIn: {
    screen: SignedIn,
    navigationOptions: ({navigation}) => ({
      headerStyle,
      headerTitleStyle,
      title: 'Welcome',
      headerLeft: menuLeft({navigation}),
      tabBarVisible: true,
    })
  },
})