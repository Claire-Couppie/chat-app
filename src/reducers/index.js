import { combineReducers } from 'redux'
import messages from './messages'
import currentPage from './currentPage'

export default combineReducers({
  messages,
  currentPage,
})