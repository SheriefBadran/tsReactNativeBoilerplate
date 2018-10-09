import * as React from 'react'
import {
  createStackNavigator,
  NavigationScreenProps,
  HeaderBackButton,
} from 'react-navigation'
import {headerTitleStyle, headerStyle} from '../components/ui/layout'
import {menuLeft} from '../components/ui/menu-left'
import {Welcome} from '../screens/welcome-screen'
import {About} from '../screens/about-screen'
import {AboutProfile} from '../screens/about-profile-stack'

const config = (title: string) => ({
  navigationOptions: ({navigation}: NavigationScreenProps) => ({
    title,
    headerLeft: ({title, onPress}) =>
      title ? <HeaderBackButton onPress={onPress} /> : menuLeft({navigation}),
    headerStyle,
    headerTitleStyle,
  }),
})

export const WelcomeStack = createStackNavigator({Welcome}, config('Welcome'))
export const AboutStack = createStackNavigator(
  {About, AboutProfile},
  config('About'),
)
