import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import {theme} from './components/ui/layout'
import {createRootNavigator} from './navigators/root-navigator'

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