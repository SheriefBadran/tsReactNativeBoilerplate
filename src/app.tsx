import * as React from 'react'
import {
  Platform,
} from 'react-native'
import {Button, View} from 'react-native'
import {
  StackNavigator,
  SwitchNavigator
} from 'react-navigation'
import { ThemeProvider } from 'styled-components'
import {headerStyle, headerTitleStyle, theme} from './components/ui/layout'
import {menuLeft} from './components/ui/menu-left'

// export const menuLeft = ({navigation}) =>
//   Platform.OS === 'android'
//     ? <Icon name='menu' style={{marginLeft: 16}} size={30} onPress={() => navigation.navigate('DrawerOpen')} />
//     : undefined

/**
 * Selects tabs for ios and drawer for android
 */
const SignedIn = Platform.select({
  ios: () => require('./navigators/tab-navigator').RootTabs,
  android: () => require('./navigators/drawer-navigator').RootDrawer,
})()

const SignedInNavigator = StackNavigator({
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

const SignedOut = ({navigation}) => (
    <View style={{
      paddingVertical: 20,
      display: 'flex',
    }}>
      <Button
        style={{
          backgroundColor: '#03A9F4'
        }}
        title='SIGN IN'
        onPress={() => navigation.navigate('SignedIn')}
      />
  </View>
)

const createRootNavigator = (isSignedIn = false) =>
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

/* DISABLE YELLOW ERROR BOX
  console.ignoredYellowBox = [
        'Setting a timer'
    ];
  console.disableYellowBox = true
*/

/**
 * ThemeProvider: Passes theme as a prop down to all styled components.
 * Please comment each styled component using theme and refer to ThemeProvider
 * for clarity.
 */
const RootNavigator = createRootNavigator()
export const App = () =>
    <ThemeProvider theme={theme}>
      <RootNavigator />
    </ThemeProvider>