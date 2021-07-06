// todos actions file
import API from 'goals-todos-api'

// add variables for listeneres, this avoids posibility of typos
// export variables that they can be 'listened to' in reducers folder
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

//action creators

function addTodo (todo){
    return{
        type: ADD_TODO,
        todo,
    }
}

function removeTodo (id){
    return {
        type: REMOVE_TODO,
        id,
    }
}

function toggleTodo (id){
    return{
        type: TOGGLE_TODO,
        id,
    }
}

//asynchronus action creators
//Because asynchronus (will be used in other files)
//need to export

export function handleAddTodo(name, callback){
    return (dispatch) => {
        return API.saveTodo(name)
            .then((todo) => {
                dispatch(addTodo(todo))
                callback()
            })
            .catch(() => {
                alert('An error occured! Try again.')
            })

    }
}

export function handleDeleteTodo(todo){
    return (dispatch) => {
        //removes item from UI
        dispatch(removeTodo(todo.id))

        //need to remove todo item from DB,
        return API.deleteTodo(todo.id)
        //if failure to remove, add it back in
            .catch(() => {
                dispatch(addTodo(todo))
                alert('An error occured! Try again.')
            })
    }
}

export function handleToggle(id){
    return (dispatch) => {
        dispatch(toggleTodo(id))

        //update item toggle in the DB
        return API.saveTodoToggle(id)
            .catch(() => {
                dispatch(toggleTodo(id))
                alert('An error occured! Try again.')
            })
    }
}

