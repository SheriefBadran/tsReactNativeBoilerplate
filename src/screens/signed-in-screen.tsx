import {Platform} from 'react-native'
import {createStackNavigator, NavigationScreenProps} from 'react-navigation'
import {headerStyle, headerTitleStyle} from '../components/ui/layout'
import {menuLeft} from '../components/ui/menu-left'
import {RootTabs} from '../navigators/tab-navigator'
import {RootDrawer} from '../navigators/drawer-navigator'

/**
 * Selects tabs for ios and drawer for android
 */
const SignedIn = Platform.select({
  ios: () => RootTabs,
  android: () => RootDrawer,
})()

const StackNavigator = (component: React.Component) =>
  createStackNavigator(
    {component},
    {
      navigationOptions: ({navigation}: NavigationScreenProps) => ({
        title: 'Welcome',
        headerLeft: menuLeft({navigation}),
        headerStyle,
        headerTitleStyle,
      }),
    },
  )

export const SignedInNavigator = StackNavigator(SignedIn)
