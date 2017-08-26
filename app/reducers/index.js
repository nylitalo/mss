import { combineReducers } from 'redux'
import { area } from './areaReducer'
import { service } from './serviceReducer'

export default combineReducers({
  area,
  service
})
