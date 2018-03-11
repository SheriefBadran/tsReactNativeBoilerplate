import {
  DrawerNavigator,
} from 'react-navigation'
import {CustomeDrawer} from '../components/ui/custom-drawer'
import {AboutIcon, HomeIcon} from '../components/ui/route-icons'
import {About} from '../screens/about-screen'
import {Welcome} from '../screens/welcome-screen'
import {activeColor, inactiveColor} from '../style/colors'

export const RootDrawer = DrawerNavigator({
  Home: {
    screen: Welcome,
    navigationOptions: {
      drawerLabel: 'Welcome',
      drawerIcon: HomeIcon,
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      drawerLabel: 'About',
      drawerIcon: AboutIcon,
    },
  },
}, {
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentComponent: CustomeDrawer,
  contentOptions: {
    activeTintColor: activeColor,
    inactiveTintColor: inactiveColor,
  },
})