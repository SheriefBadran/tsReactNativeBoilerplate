import {createBottomTabNavigator} from 'react-navigation'
import {theme} from '../components/ui/layout'
import {AboutIcon, HomeIcon} from '../components/ui/route-icons'
import {activeColor, inactiveColor} from '../style/colors'
import {WelcomeStack, AboutStack} from './stack-navigator'

const labelStyle = {
  fontFamily: theme.fontFamily,
}

export const RootTabs = createBottomTabNavigator(
  {
    Home: {
      screen: WelcomeStack,
      navigationOptions: {
        tabBarLabel: 'Welcome',
        tabBarIcon: HomeIcon,
      },
    },
    About: {
      screen: AboutStack,
      navigationOptions: {
        tabBarLabel: 'About',
        tabBarIcon: AboutIcon,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: activeColor,
      inactiveTintColor: inactiveColor,
      style: {
        backgroundColor: '#FFFFFF',
        paddingBottom: 4,
      },
      labelStyle,
    },
  },
)
