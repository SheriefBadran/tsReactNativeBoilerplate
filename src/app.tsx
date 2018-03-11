import * as React from 'react'
import {
  Platform,
} from 'react-native'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components'
import {theme} from './components/ui/layout'
import {store} from './lib/store'

/**
 * Selects tabs for ios and drawer for android
 */
const RootNavigation = Platform.select({
  ios: () => require('./navigators/tab-navigator').RootTabs,
  android: () => require('./navigators/drawer-navigator').RootDrawer,
})()
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
export const App = () =>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
        <RootNavigation />
    </ThemeProvider>
  </Provider>
