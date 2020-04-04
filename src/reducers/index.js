import {companyReducer} from './companyReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  comp: companyReducer
})

export default allReducers