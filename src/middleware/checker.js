//Checker Middleware file

import {ADD_TODO} from '../actions/todos'
import {ADD_GOAL} from '../actions/goals'

//Middleware - Checker
//after action is dispatched, but before it hits reducer/modifies state
//next = next middleware if one is there, else=dispatch
const checker = (store) => (next) => (action) => {
    if(
        action.type === ADD_TODO &&
        action.todo.name.toLowerCase().includes('bitcoin')
    ){
        return alert("Nope. That's a bad idea.")
    }else if(
        action.type === ADD_GOAL &&
        action.goal.name.toLowerCase().includes('bitcoin')
    ){
        return alert("Nope. That's a bad idea.")
    }

    return next(action)
}

export default checker
