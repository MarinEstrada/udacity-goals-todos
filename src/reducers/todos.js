// todos reducer file

// import todo actions from actions folder
import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
} from '../actions/todos'

import {
    RECEIVE_DATA,
} from '../actions/shared'

// reduces request into a brand new state (must be a pure function)
// make todos reducer default export
export default function todos(state = [], action) {
    switch(action.type){
        case ADD_TODO:
            return state.concat([action.todo])
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.id)
        case TOGGLE_TODO:
            return state.map((todo) => todo.id === action.id
                ? Object.assign({}, todo, {complete: !todo.complete} )
                : todo)
        case RECEIVE_DATA:
            return action.todos
        default:
            return state
    }
}
