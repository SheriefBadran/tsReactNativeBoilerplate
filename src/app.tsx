import * as React from 'react'
import {SwitchNavigator} from 'react-navigation'
import { ThemeProvider } from 'styled-components'
import {theme} from './components/ui/layout'
import {SignedInNavigator} from './screens/signed-in-screen'
import {SignedOut} from './screens/signed-out-screen'

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