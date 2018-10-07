import {createStackNavigator, NavigationScreenProps} from 'react-navigation'
import {headerTitleStyle, headerStyle} from '../components/ui/layout'
import {menuLeft} from '../components/ui/menu-left'
import {Welcome} from '../screens/welcome-screen'
import {About} from '../screens/about-screen'

const config = (title: string) => ({
  navigationOptions: ({navigation}: NavigationScreenProps) => ({
    title,
    headerLeft: menuLeft({navigation}),
    headerStyle,
    headerTitleStyle,
  }),
})

export const WelcomeStack = createStackNavigator({Welcome}, config('Welcome'))
export const AboutStack = createStackNavigator({About}, config('About'))
