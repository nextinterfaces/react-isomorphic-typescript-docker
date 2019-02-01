import { combineReducers } from 'redux';
import reducerOne from './first-reducer';
import reducerTwo from './second-reducer'

const rootReducer = combineReducers({
    firstReducer: reducerOne,
    secondReducer: reducerTwo
})

export default rootReducer
