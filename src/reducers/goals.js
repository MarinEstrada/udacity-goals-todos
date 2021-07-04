// goals reducer file

// import goals actions from actions folder
import {
    ADD_GOAL,
    REMOVE_GOAL,
} from '../actions/goals'

// reduces request into a brand new state (must be a pure function)
// make goals reducer default export
export default function goals (state = [], action) {
    switch(action.type) {
        case ADD_GOAL:
            return state.concat([action.goal])
        case REMOVE_GOAL:
            return state.filter((goal) => goal.id !== action.id)
        case RECEIVE_DATA:
            return action.goals
        default:
            return state
    }
}
