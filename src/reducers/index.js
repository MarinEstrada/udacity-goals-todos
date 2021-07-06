// index reducer file

import { combineReducers } from 'redux'
import todos from './todos'
import goals from './goals'
import loading from './loading'

// handles combine reducers
export default combineReducers({
    todos,
    goals,
    loading,
})
