import {createDrawerNavigator} from 'react-navigation'
import {CustomeDrawer} from '../components/ui/custom-drawer'
import {activeColor, inactiveColor} from '../style/colors'
import {HomeIcon, AboutIcon} from '../components/ui/route-icons'
import {WelcomeStack, AboutStack} from './stack-navigator'

export const RootDrawer = createDrawerNavigator(
  {
    Home: {
      screen: WelcomeStack,
      navigationOptions: {
        drawerLabel: 'Welcome',
        drawerIcon: HomeIcon,
      },
    },
    About: {
      screen: AboutStack,
      navigationOptions: {
        drawerLabel: 'About',
        drawerIcon: AboutIcon,
      },
    },
  },

  {
    contentComponent: CustomeDrawer,
    contentOptions: {
      activeTintColor: activeColor,
      inactiveTintColor: inactiveColor,
    },
  },
)
