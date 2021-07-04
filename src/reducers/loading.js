// loading reducer file

//import loading actions from actions folder
import {
    RECEIVE_DATA,
} from '../actions/shared'

// reduces request into a brand new state (must be a pure function)
// make loading reducer default export
export default function loading(state = true, action){
    switch(action.type){
        case RECEIVE_DATA:
            return false
        default:
            return state
    }
}
