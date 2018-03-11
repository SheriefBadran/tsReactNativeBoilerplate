import {combineReducers, createStore} from 'redux'
import {item} from './reducers/item'

const reducer = combineReducers({
  item
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)