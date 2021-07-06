// Logger middleware file


//Middleware - logger
// shows what action is, and what is new state after action is dispatched
const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('the action: ', action)
        const result = next(action)
        console.log('the new state: ', store.getState())
    console.groupEnd()
    return result
}

export default logger
