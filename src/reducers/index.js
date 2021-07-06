// index reducer file
// handles combine reducers and middleware

import { combineReducers } from 'redux'
import todos from './todos'
import goals from './goals'
import loading from './loading'

export default combineReducers({
    todos,
    goals,
    loading,
})
