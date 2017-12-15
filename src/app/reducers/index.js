import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import HomeState from './home.js'

const rootReducer = combineReducers({
    HomeState,
    routing: routerReducer,
})
export default rootReducer
