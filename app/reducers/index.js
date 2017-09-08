import { combineReducers } from 'redux'
import { area } from './areaReducer'
import { service } from './serviceReducer'
import { services } from './servicesReducer'

export default combineReducers({
  area,
  service,
  services
})
